/**
 * SafeImage Component
 * Requirements: 7.2 - Optimize image sizes for web delivery (includes error handling)
 * 
 * Provides fallback handling for broken image URLs
 */

import { useState, ImgHTMLAttributes } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	fallbackSrc?: string;
	fallbackElement?: React.ReactNode;
}

// Default placeholder SVG as a data URI
const DEFAULT_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f1f5f9' width='100' height='100'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EImage%3C/text%3E%3C/svg%3E";

const SafeImage = ({
	src,
	alt,
	fallbackSrc = DEFAULT_FALLBACK,
	fallbackElement,
	className,
	...props
}: SafeImageProps) => {
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const handleError = () => {
		setHasError(true);
		setIsLoading(false);
	};

	const handleLoad = () => {
		setIsLoading(false);
	};

	// If error and custom fallback element provided, render it
	if (hasError && fallbackElement) {
		return <>{fallbackElement}</>;
	}

	return (
		<img
			src={hasError ? fallbackSrc : src}
			alt={alt || "Image"}
			className={`${className || ""} ${isLoading ? "animate-pulse bg-slate-200" : ""}`}
			onError={handleError}
			onLoad={handleLoad}
			loading="lazy"
			{...props}
		/>
	);
};

export default SafeImage;
