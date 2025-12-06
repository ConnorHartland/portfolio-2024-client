/**
 * Project types and validation
 * Requirements: 9.2 - Support additions via data files with consistent structure
 */

export interface Project {
	title: string;
	description: string;
	imageUrl?: string;
	githubLink: string;
	liveLink?: string;
	technologies: string[];
	imageAlt?: string;
	blogPost?: string;
}

/**
 * Validates that a Project has all required fields
 * Required: title, description, githubLink, technologies (non-empty array)
 */
export function isValidProject(project: unknown): project is Project {
	if (typeof project !== "object" || project === null) return false;
	const p = project as Record<string, unknown>;
	return (
		typeof p.title === "string" &&
		p.title.length > 0 &&
		typeof p.description === "string" &&
		p.description.length > 0 &&
		typeof p.githubLink === "string" &&
		p.githubLink.length > 0 &&
		Array.isArray(p.technologies) &&
		p.technologies.length > 0 &&
		p.technologies.every((t: unknown) => typeof t === "string")
	);
}

/**
 * Validates an array of projects
 */
export function areValidProjects(projects: unknown[]): projects is Project[] {
	return projects.every(isValidProject);
}
