import { Skill, SkillCategory } from '../constants/skills';

/**
 * Groups skills by their category
 * @param skills - Array of skills to group
 * @returns Map of category to array of skills in that category
 */
export function groupSkillsByCategory(skills: Skill[]): Map<SkillCategory, Skill[]> {
  const grouped = new Map<SkillCategory, Skill[]>();
  
  for (const skill of skills) {
    const categorySkills = grouped.get(skill.category) || [];
    categorySkills.push(skill);
    grouped.set(skill.category, categorySkills);
  }
  
  return grouped;
}
