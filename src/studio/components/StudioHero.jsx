"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function StudioHero({
  // Content props
  headline = "Welcome to Our Amazing Product",
  description = "Discover the future of innovation with our cutting-edge solutions that transform the way you work.",
  backgroundImage,
  
  // Layout toggles
  centerText = false,
  largeText = false,
  fullHeight = false,
  
  // Color options
  textColor = "white",
  backgroundColor = "#1f2937",
  overlayColor = "rgba(0,0,0,0.5)",
  
  // Button options
  showButton = true,
  buttonText = "Get Started",
  buttonLink = "#",
  
  // Styling toggles
  showOverlay = true,
  useBackgroundColor = false,
  
  // Studio props
  ...studioProps
}) {
  // Helper function to validate and sanitize color values
  const sanitizeColor = (color, fallback) => {
    if (!color || typeof color !== 'string') return fallback;
    
    // Basic validation for common color formats
    const colorRegex = /^(#[0-9A-Fa-f]{3,6}|rgba?\([^)]+\)|[a-zA-Z]+)$/;
    return colorRegex.test(color.trim()) ? color.trim() : fallback;
  };

  // Helper function to merge classNames properly
  const mergeClassName = (baseClassName, studioClassName) => {
    if (!studioClassName) return baseClassName;
    return `${baseClassName} ${studioClassName}`;
  };

  // Sanitize colors with fallbacks
  const safeTextColor = sanitizeColor(textColor, "white");
  const safeBackgroundColor = sanitizeColor(backgroundColor, "#1f2937");
  const safeOverlayColor = sanitizeColor(overlayColor, "rgba(0,0,0,0.5)");

  // Dynamic CSS classes based on props
  const containerClasses = `
    relative isolate overflow-hidden flex items-center
    ${fullHeight ? 'h-screen' : 'h-[600px]'}
    ${centerText ? 'justify-center text-center' : 'justify-start text-left'}
  `.replace(/\s+/g, ' ').trim();

  const textContainerClasses = `
    relative z-20 max-w-7xl mx-auto px-8
    ${centerText ? 'text-center' : 'text-left'}
  `.replace(/\s+/g, ' ').trim();

  const headlineClasses = `
    font-bold leading-tight tracking-tight normal-case
    ${largeText ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'}
    ${centerText ? 'mx-auto' : ''}
  `.replace(/\s+/g, ' ').trim();

  const descriptionClasses = `
    mt-6 text-lg md:text-xl leading-relaxed max-w-2xl
    ${centerText ? 'mx-auto' : ''}
  `.replace(/\s+/g, ' ').trim();

  const buttonClasses = `
    inline-flex items-center px-6 py-3 bg-black text-white rounded-full
    hover:bg-gray-800 transition-colors font-medium text-sm uppercase tracking-wider
    focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
  `.replace(/\s+/g, ' ').trim();


  // Extract className and style from studioProps to merge properly
  const { className: studioClassName, style: studioStyle, ...otherStudioProps } = studioProps || {};

  return (
    <div 
      {...otherStudioProps}
      className={mergeClassName(containerClasses, studioClassName)}
      style={{
        backgroundColor: useBackgroundColor ? safeBackgroundColor : 'transparent',
        ...studioStyle
      }}
    >
      {/* Background Image */}
      {!useBackgroundColor && backgroundImage && (
        <img
          src={backgroundImage.url || backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
      )}

      {/* Overlay */}
      {showOverlay && !useBackgroundColor && (
        <div 
          className="absolute inset-0 z-10"
          style={{ backgroundColor: safeOverlayColor }}
        />
      )}

      {/* Content */}
      <div className={textContainerClasses}>
        <h1 
          className={headlineClasses}
          style={{ color: safeTextColor }}
        >
          {headline}
        </h1>

        <p 
          className={descriptionClasses}
          style={{ color: safeTextColor }}
        >
          {description}
        </p>

        {showButton && buttonText && (
          <div className={`mt-8 ${centerText ? 'flex justify-center' : ''}`}>
            <a
              href={buttonLink}
              className={buttonClasses}
            >
              <span>{buttonText}</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}