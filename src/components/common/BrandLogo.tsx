import React from 'react';
import {
  STUDYPLUG_LOGO,
  STUDYPLUG_LOGO_DARK,
  STUDYPLUG_ICON_TRANSPARENT
} from '../../assets/studyPlugLogo';

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  isDark = false,
  size = 'md',
  variant = 'full'
}) => {
  const heightClasses = {
    xs: 'h-6 sm:h-7',
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  const logoSrc = variant === 'icon' 
    ? STUDYPLUG_ICON_TRANSPARENT 
    : (isDark ? STUDYPLUG_LOGO_DARK : STUDYPLUG_LOGO);

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="StudyPlug"
        className={`${heightClasses[size]} w-auto object-contain max-w-full`}
        draggable={false}
      />
    </div>
  );
};

export default BrandLogo;
