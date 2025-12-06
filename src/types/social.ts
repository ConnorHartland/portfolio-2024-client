/**
 * Social link types and validation
 * Requirements: 9.2 - Support additions via data files with consistent structure
 */

import { IconType } from "react-icons";

export interface SocialLink {
	platform: string;
	url: string;
	icon: IconType;
	color: string;
}

/**
 * Validates that a SocialLink has all required fields
 */
export function isValidSocialLink(link: unknown): link is SocialLink {
	if (typeof link !== "object" || link === null) return false;
	const l = link as Record<string, unknown>;
	return (
		typeof l.platform === "string" &&
		l.platform.length > 0 &&
		typeof l.url === "string" &&
		l.url.length > 0 &&
		typeof l.icon === "function" &&
		typeof l.color === "string" &&
		l.color.length > 0
	);
}

/**
 * Validates a URL format (basic check)
 */
export function isValidUrl(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}
