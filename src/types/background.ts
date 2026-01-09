/**
 * Background data types and validation
 * Requirements: 9.2 - Support additions via data files with consistent structure
 */

export interface EducationEntry {
	institution: string;
	degree: string;
	field: string;
	graduationYear: number;
	location: string;
	achievements?: string[];
}

export interface CareerJourney {
	start: string;
	transitions: string[];
	currentFocus: string;
}

export interface BackgroundData {
	introduction: string;
	careerJourney: CareerJourney;
	education: EducationEntry[];
	certifications: string[];
	personalStatement: string;
}

/**
 * Validates that an EducationEntry has all required fields
 */
export function isValidEducationEntry(entry: unknown): entry is EducationEntry {
	if (typeof entry !== "object" || entry === null) return false;
	const e = entry as Record<string, unknown>;
	return (
		typeof e.institution === "string" &&
		e.institution.length > 0 &&
		typeof e.degree === "string" &&
		e.degree.length > 0 &&
		typeof e.field === "string" &&
		e.field.length > 0 &&
		typeof e.graduationYear === "number" &&
		e.graduationYear > 1900 &&
		e.graduationYear <= new Date().getFullYear() + 10 &&
		typeof e.location === "string" &&
		e.location.length > 0
	);
}

/**
 * Validates that BackgroundData has all required fields
 */
export function isValidBackgroundData(data: unknown): data is BackgroundData {
	if (typeof data !== "object" || data === null) return false;
	const d = data as Record<string, unknown>;
	
	// Check introduction
	if (typeof d.introduction !== "string" || d.introduction.length === 0) return false;
	
	// Check careerJourney
	if (typeof d.careerJourney !== "object" || d.careerJourney === null) return false;
	const cj = d.careerJourney as Record<string, unknown>;
	if (
		typeof cj.start !== "string" ||
		!Array.isArray(cj.transitions) ||
		typeof cj.currentFocus !== "string"
	) return false;
	
	// Check education array
	if (!Array.isArray(d.education)) return false;
	for (const entry of d.education) {
		if (!isValidEducationEntry(entry)) return false;
	}
	
	// Check certifications array
	if (!Array.isArray(d.certifications)) return false;
	
	// Check personalStatement
	if (typeof d.personalStatement !== "string") return false;
	
	return true;
}
