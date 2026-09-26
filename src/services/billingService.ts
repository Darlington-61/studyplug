/**
 * Study Plug - External Checkout & Billing Service
 *
 * Handles:
 * 1. Generating prefilled Selar checkout URLs (associating candidate email and order reference).
 * 2. Querying verified entitlements from the backend.
 *
 * NOTE: Affiliate tracking, commission calculation, and payouts are handled 100%
 * outside StudyPlug on Selar. StudyPlug only initiates checkout and verifies server-side access.
 */

import { getStoredApiUrl } from './apiService';

export interface EntitlementItem {
  plan_code: string;
  is_active: number | boolean;
  activated_at: string;
  expires_at: string | null;
}

export interface UserEntitlementsResponse {
  success: boolean;
  email?: string;
  name?: string | null;
  is_premium?: boolean;
  active_plans?: string[];
  entitlements?: EntitlementItem[];
  error?: string;
}

// Configurable Selar Product URL Slugs or direct full links
// Change these to your live Selar product URLs
export const DEFAULT_SELAR_PRODUCTS: Record<string, string> = {
  jamb: 'https://selar.co/p/studyplug-jamb',
  waec: 'https://selar.co/p/studyplug-waec',
  all: 'https://selar.co/p/studyplug-all'
};

/**
 * Generates an internal StudyPlug order reference (e.g. SP-ORD-2026-XXXX)
 */
export const generateOrderReference = (): string => {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SP-ORD-${dateStr}-${rand}`;
};

/**
 * Builds the external checkout URL with pre-filled candidate parameters
 */
export const buildSelarCheckoutUrl = (options: {
  productUrlOrSlug?: string;
  plan?: 'jamb' | 'waec' | 'all';
  email?: string;
  customOrderRef?: string;
}): string => {
  const plan = options.plan || 'jamb';
  const baseUrl = options.productUrlOrSlug || DEFAULT_SELAR_PRODUCTS[plan] || DEFAULT_SELAR_PRODUCTS.jamb;
  const ref = options.customOrderRef || generateOrderReference();

  try {
    const urlObj = new URL(baseUrl);
    if (options.email && options.email.trim()) {
      urlObj.searchParams.set('email', options.email.trim().toLowerCase());
    }
    urlObj.searchParams.set('custom_order_id', ref);
    return urlObj.toString();
  } catch {
    // If not a full URL, append parameters safely
    const sep = baseUrl.includes('?') ? '&' : '?';
    const emailParam = options.email ? `email=${encodeURIComponent(options.email.trim().toLowerCase())}&` : '';
    return `${baseUrl}${sep}${emailParam}custom_order_id=${encodeURIComponent(ref)}`;
  }
};

/**
 * Checks active permissions and entitlements for a candidate's email from the backend
 */
export const checkUserEntitlements = async (email: string): Promise<UserEntitlementsResponse> => {
  const trimmed = email ? email.trim().toLowerCase() : '';
  if (!trimmed || !trimmed.includes('@')) {
    return { success: false, error: 'Valid email required' };
  }

  const apiUrl = getStoredApiUrl();
  try {
    const res = await fetch(`${apiUrl}/get_user_entitlements.php?email=${encodeURIComponent(trimmed)}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) {
      return { success: false, error: `HTTP ${res.status}: ${res.statusText}` };
    }

    const data: UserEntitlementsResponse = await res.json();
    return data;
  } catch (err: any) {
    console.warn('Entitlement check error:', err);
    return { success: false, error: err.message || 'Unable to fetch entitlements' };
  }
};
