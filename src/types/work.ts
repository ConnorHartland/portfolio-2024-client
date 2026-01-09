/**
 * Work experience types and validation
 * Requirements: 9.2 - Support additions via data files with consistent structure
 */

export interface WorkExperience {
	companyName: string;
	image: string;
	role: string;
	dates: string;
	location: string;
	current: boolean;
	description: string[];
}

/**
 * Validates that a WorkExperience has all required fields
 */
export function isValidWorkExperience(exp: unknown): exp is WorkExperience {
	if (typeof exp !== "object" || exp === null) return false;
	const e = exp as Record<string, unknown>;
	return (
		typeof e.companyName === "string" &&
		e.companyName.length > 0 &&
		typeof e.image === "string" &&
		e.image.length > 0 &&
		typeof e.role === "string" &&
		e.role.length > 0 &&
		typeof e.dates === "string" &&
		e.dates.length > 0 &&
		typeof e.location === "string" &&
		e.location.length > 0 &&
		typeof e.current === "boolean" &&
		Array.isArray(e.description) &&
		e.description.length > 0 &&
		e.description.every((d: unknown) => typeof d === "string")
	);
}

/**
 * Validates an array of work experiences
 */
export function areValidWorkExperiences(experiences: unknown[]): experiences is WorkExperience[] {
	return experiences.every(isValidWorkExperience);
}
