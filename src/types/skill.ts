/**
 * Skill types and validation
 * Requirements: 9.2 - Support additions via data files with consistent structure
 */

export enum SkillCategory {
	Cloud = "Cloud & Infrastructure",
	DevOps = "DevOps & Automation",
	Frontend = "Frontend Development",
	Backend = "Backend Development",
	Database = "Databases",
}

export interface Skill {
	name: string;
	image: string;
	description: string | null;
	category: SkillCategory;
}

/**
 * Validates that a Skill has all required fields
 */
export function isValidSkill(skill: unknown): skill is Skill {
	if (typeof skill !== "object" || skill === null) return false;
	const s = skill as Record<string, unknown>;
	return (
		typeof s.name === "string" &&
		s.name.length > 0 &&
		typeof s.image === "string" &&
		s.image.length > 0 &&
		(s.description === null || typeof s.description === "string") &&
		typeof s.category === "string" &&
		Object.values(SkillCategory).includes(s.category as SkillCategory)
	);
}

/**
 * Validates an array of skills
 */
export function areValidSkills(skills: unknown[]): skills is Skill[] {
	return skills.every(isValidSkill);
}
