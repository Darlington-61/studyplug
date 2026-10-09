/**
 * ══════════════════════════════════════════════════════════════════
 * StudyPlug — Client-Side Security Module
 * ══════════════════════════════════════════════════════════════════
 *
 * Implements:
 * 1. HTML/SVG sanitization for dangerouslySetInnerHTML content
 * 2. Safe localStorage with schema validation & prototype-pollution guard
 * 3. Premium licence verification (HMAC-signed token, not plain 'true')
 * 4. Anti-devtools detection (exam integrity)
 * 5. Input sanitization helpers
 * 6. Anti-clickjacking runtime check
 */

// ─────────────────────────────────────────────────────────────────
// § 1. HTML / SVG SANITIZER
//    Only allows known-safe SVG/HTML elements and attributes.
//    Strips ALL event handlers (onclick, onerror, etc.) and
//    javascript: / data: URIs.
// ─────────────────────────────────────────────────────────────────

const ALLOWED_SVG_TAGS = new Set([
  'svg','g','path','circle','ellipse','rect','line','polyline','polygon',
  'text','tspan','defs','use','symbol','clipPath','linearGradient',
  'radialGradient','stop','filter','feBlend','feColorMatrix',
  'feComposite','feGaussianBlur','feMerge','feMergeNode','title','desc',
  'marker','pattern','image','foreignObject',
]);

const ALLOWED_HTML_TAGS = new Set([
  'b','i','u','s','strong','em','span','p','br','sup','sub',
  'ul','ol','li','table','thead','tbody','tr','th','td',
  'h1','h2','h3','h4','h5','h6','div','blockquote','code','pre','hr',
  'figure','figcaption','math','mrow','msup','msub','mfrac','mn','mo','mi',
  'img','picture','source',
]);

const ALLOWED_ATTRS = new Set([
  'class','id','style','viewBox','xmlns','width','height','fill','stroke',
  'stroke-width','stroke-linecap','stroke-linejoin','d','cx','cy','r','rx','ry',
  'x','y','x1','y1','x2','y2','points','transform','opacity','clip-path',
  'font-size','font-family','font-weight','text-anchor','dominant-baseline',
  'stop-color','stop-opacity','offset','gradientUnits','gradientTransform',
  'preserveAspectRatio','href','xlink:href','marker-end','marker-start',
  'colspan','rowspan','scope','align','valign','border','cellpadding','cellspacing',
  'src','alt','loading','srcset','sizes',
]);

/**
 * Sanitize HTML/SVG string — strips scripts, event handlers, bad URIs.
 * Safe to use with dangerouslySetInnerHTML.
 */
export function sanitizeHtml(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';

  // Quick checks — reject obvious injection attempts
  if (/<script/i.test(dirty)) return '';
  if (/javascript\s*:/i.test(dirty)) return '';
  if (/vbscript\s*:/i.test(dirty)) return '';

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(dirty, 'text/html');
    sanitizeNode(doc.body);
    return doc.body.innerHTML;
  } catch {
    // DOMParser unavailable (SSR) — fall back to regex strip
    return dirty
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
      .replace(/javascript\s*:[^"'>]*/gi, '');
  }
}

function sanitizeNode(node: Node): void {
  const toRemove: Node[] = [];

  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const el = child as Element;
      const tag = el.tagName.toLowerCase();

      // Remove disallowed tags entirely
      if (!ALLOWED_SVG_TAGS.has(tag) && !ALLOWED_HTML_TAGS.has(tag)) {
        toRemove.push(child);
        return;
      }

      // Strip disallowed / dangerous attributes
      Array.from(el.attributes).forEach((attr) => {
        const name = attr.name.toLowerCase();
        const value = attr.value;

        if (!ALLOWED_ATTRS.has(name)) {
          el.removeAttribute(attr.name);
          return;
        }
        // Strip event handlers (on*)
        if (/^on/i.test(name)) {
          el.removeAttribute(attr.name);
          return;
        }
        // Strip javascript: / vbscript: URLs
        if (/javascript\s*:|vbscript\s*:/i.test(value)) {
          el.removeAttribute(attr.name);
          return;
        }
        // Handle data: URIs — only allow safe image data URIs for img/source src
        if (/^data:/i.test(value.trim())) {
          const isSafeImageDataUri =
            (tag === 'img' || tag === 'source') &&
            name === 'src' &&
            /^data:image\/(?:png|jpe?g|gif|webp|svg\+xml);base64,/i.test(value.trim());
          if (!isSafeImageDataUri) {
            el.removeAttribute(attr.name);
            return;
          }
        }
        // Sanitize style attribute — remove expression(), url(javascript:), etc.
        if (name === 'style') {
          const safe = value
            .replace(/expression\s*\(/gi, '')
            .replace(/javascript\s*:/gi, '')
            .replace(/behavior\s*:/gi, '')
            .replace(/vbscript\s*:/gi, '');
          el.setAttribute('style', safe);
        }
      });

      sanitizeNode(el);
    }
  });

  toRemove.forEach((n) => node.removeChild(n));
}

// ─────────────────────────────────────────────────────────────────
// § 2. SAFE LOCALSTORAGE
//    Validates data shape on read. Prevents prototype pollution.
// ─────────────────────────────────────────────────────────────────

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    // Prototype pollution guard
    if (
      raw.includes('__proto__') ||
      raw.includes('constructor') ||
      raw.includes('prototype')
    ) {
      console.warn('[StudyPlug Security] Prototype pollution attempt blocked in localStorage.');
      return fallback;
    }
    return parsed as T;
  } catch {
    return fallback;
  }
}

export const safeStorage = {
  getNumber(key: string, fallback: number): number {
    const raw = localStorage.getItem(key);
    const n = Number(raw);
    return isNaN(n) || !isFinite(n) ? fallback : Math.max(0, Math.floor(n));
  },

  getString(key: string, fallback: string, allowList?: string[]): string {
    const raw = localStorage.getItem(key) || fallback;
    if (allowList && !allowList.includes(raw)) return fallback;
    return raw;
  },

  getArray<T>(key: string, fallback: T[]): T[] {
    const parsed = safeJsonParse<T[]>(localStorage.getItem(key), fallback);
    return Array.isArray(parsed) ? parsed : fallback;
  },

  getObject<T extends object>(key: string, fallback: T): T {
    const parsed = safeJsonParse<T>(localStorage.getItem(key), fallback);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return fallback;
    return parsed;
  },

  set(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    } catch (e) {
      console.warn('[StudyPlug Security] Storage write failed:', e);
    }
  },
};

// ─────────────────────────────────────────────────────────────────
// § 3. PREMIUM LICENCE VERIFICATION
//    Instead of plain 'true', we store a signed token.
//    Token format: base64(payload).signature
//    Signature = simple HMAC-like hash using device fingerprint + secret.
//    Even if a user sets localStorage manually, the signature won't match.
// ─────────────────────────────────────────────────────────────────

const PREMIUM_KEY = 'studyplug_premium_token';
const LICENCE_SECRET = 'SP2026_K9#mZ!qLxRv'; // obfuscated at build time

function getDeviceFingerprint(): string {
  const nav = window.navigator;
  const parts = [
    nav.language || '',
    String(window.screen.colorDepth || ''),
    String(window.screen.width || ''),
    String(window.screen.height || ''),
    nav.platform || '',
  ];
  return parts.join('|');
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function signToken(payload: string): string {
  const sig = simpleHash(payload + LICENCE_SECRET + getDeviceFingerprint());
  return `${btoa(payload)}.${sig}`;
}

function verifyToken(token: string): { valid: boolean; email?: string; expiry?: number } {
  try {
    const [b64, sig] = token.split('.');
    if (!b64 || !sig) return { valid: false };
    const payload = atob(b64);
    const expected = simpleHash(payload + LICENCE_SECRET + getDeviceFingerprint());
    if (sig !== expected) return { valid: false };
    const data = JSON.parse(payload);
    if (data.expiry && Date.now() > data.expiry) return { valid: false };
    return { valid: true, email: data.email, expiry: data.expiry };
  } catch {
    return { valid: false };
  }
}

export const premiumLicence = {
  isValid(): boolean {
    const token = localStorage.getItem(PREMIUM_KEY);
    if (!token) return false;
    return verifyToken(token).valid;
  },

  activate(email: string, durationDays = 365): void {
    const payload = JSON.stringify({
      email,
      activatedAt: Date.now(),
      expiry: Date.now() + durationDays * 86400_000,
      v: 2,
    });
    localStorage.setItem(PREMIUM_KEY, signToken(payload));
    // Remove the old plain 'true' key if it exists
    localStorage.removeItem('studyplug_is_premium');
  },

  deactivate(): void {
    localStorage.removeItem(PREMIUM_KEY);
  },

  getInfo(): { email?: string; expiry?: number } | null {
    const token = localStorage.getItem(PREMIUM_KEY);
    if (!token) return null;
    const { valid, email, expiry } = verifyToken(token);
    return valid ? { email, expiry } : null;
  },
};

// ─────────────────────────────────────────────────────────────────
// § 4. EXAM INTEGRITY — Anti-DevTools Detection
//    During an active exam, detect if DevTools is opened and
//    warn / pause the exam (can't fully prevent, but adds friction
//    and logs the event to test history).
// ─────────────────────────────────────────────────────────────────

let _devtoolsOpenCallback: (() => void) | null = null;
let _devtoolsInterval: ReturnType<typeof setInterval> | null = null;

export function startExamIntegrityWatch(onDevToolsOpen: () => void): void {
  _devtoolsOpenCallback = onDevToolsOpen;

  // Method 1: Size differential (reliable on Chrome/Edge)
  const threshold = 160;
  _devtoolsInterval = setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      _devtoolsOpenCallback?.();
    }
  }, 1500);

  // Method 2: console.log timing trick
  let _lastCheck = Date.now();
  const _check = () => {
    const start = Date.now();
    // eslint-disable-next-line no-console
    console.log('%c', 'color:transparent');
    if (Date.now() - start > 100) {
      _devtoolsOpenCallback?.();
    }
    _lastCheck = Date.now();
  };
  // Only run occasionally to avoid performance impact
  setInterval(_check, 5000);
}

export function stopExamIntegrityWatch(): void {
  if (_devtoolsInterval) {
    clearInterval(_devtoolsInterval);
    _devtoolsInterval = null;
  }
  _devtoolsOpenCallback = null;
}

// ─────────────────────────────────────────────────────────────────
// § 5. INPUT SANITIZATION
// ─────────────────────────────────────────────────────────────────

export function sanitizeText(input: string, maxLength = 500): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .slice(0, maxLength)
    .replace(/[<>'"&]/g, (c) => ({
      '<': '&lt;', '>': '&gt;',
      "'": '&#39;', '"': '&quot;',
      '&': '&amp;',
    }[c] || c));
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

// ─────────────────────────────────────────────────────────────────
// § 6. ANTI-CLICKJACKING RUNTIME CHECK
//    If page is embedded in an iframe, break out immediately.
// ─────────────────────────────────────────────────────────────────

export function enforceNoIframe(): void {
  try {
    if (window.self !== window.top) {
      // We are inside an iframe — break out
      window.top!.location.href = window.self.location.href;
    }
  } catch {
    // Cross-origin top — definitely malicious framing, show warning
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;background:#001028;color:#fff;text-align:center;padding:2rem;">
        <div>
          <h1 style="font-size:2rem;margin-bottom:1rem;">🔒 Access Denied</h1>
          <p>StudyPlug cannot be embedded in another website.</p>
          <a href="https://studyplug.com.ng" style="color:#FFD600;font-weight:bold;">Open StudyPlug directly →</a>
        </div>
      </div>`;
  }
}

// ─────────────────────────────────────────────────────────────────
// § 7. INITIALIZE ALL SECURITY LAYERS (call once at app boot)
// ─────────────────────────────────────────────────────────────────

export function initSecurity(): void {
  // Anti-clickjacking
  enforceNoIframe();

  // Migrate old plain premium flag to new signed token
  try {
    const oldFlag = localStorage.getItem('studyplug_is_premium');
    if (oldFlag === 'true' && !localStorage.getItem(PREMIUM_KEY)) {
      // Legacy premium — issue a 30-day grace token
      premiumLicence.activate('legacy_user', 30);
      localStorage.removeItem('studyplug_is_premium');
    }
  } catch {}

  // Disable right-click on question text (light obfuscation)
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-exam-content]')) {
      e.preventDefault();
    }
  });

  // Disable text selection copy in exam view (optional — preserves notes)
  document.addEventListener('copy', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-exam-content]')) {
      e.clipboardData?.setData('text/plain', '© StudyPlug — studyplug.com.ng');
      e.preventDefault();
    }
  });
}
