import { describe, test, expect } from 'vitest';
import fc from 'fast-check';
import { groupSkillsByCategory } from './skills';
import { skillArbitrary } from '../test/arbitraries';
import { Skill } from '../constants/skills';

describe('Skills Categorization', () => {
  // Feature: portfolio-redesign, Property 8: Skills grouped by category
  test('skills are grouped by category - all skills in a group share the same category', () => {
    fc.assert(
      fc.property(
        fc.array(skillArbitrary, { minLength: 5, maxLength: 20 }),
        (skills: Skill[]) => {
          const grouped = groupSkillsByCategory(skills);
          
          // For each category group, verify all skills have the same category
          for (const [category, categorySkills] of grouped.entries()) {
            // All skills in this group should have the same category
            const allSameCategory = categorySkills.every(skill => skill.category === category);
            expect(allSameCategory).toBe(true);
            
            // Each skill should appear in exactly one category
            categorySkills.forEach(skill => {
              expect(skill.category).toBe(category);
            });
          }
          
          // Verify all skills are accounted for
          const totalSkillsInGroups = Array.from(grouped.values())
            .reduce((sum, categorySkills) => sum + categorySkills.length, 0);
          expect(totalSkillsInGroups).toBe(skills.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  // Additional property: grouping preserves all skills
  test('grouping preserves all skills without duplication', () => {
    fc.assert(
      fc.property(
        fc.array(skillArbitrary, { minLength: 1, maxLength: 20 }),
        (skills: Skill[]) => {
          const grouped = groupSkillsByCategory(skills);
          
          // Flatten all grouped skills
          const allGroupedSkills = Array.from(grouped.values()).flat();
          
          // Should have same length as input
          expect(allGroupedSkills.length).toBe(skills.length);
          
          // Each original skill should be in the grouped result
          skills.forEach(originalSkill => {
            const found = allGroupedSkills.some(
              groupedSkill => 
                groupedSkill.name === originalSkill.name &&
                groupedSkill.category === originalSkill.category &&
                groupedSkill.image === originalSkill.image
            );
            expect(found).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  // Property: empty array handling
  test('grouping handles empty array correctly', () => {
    const grouped = groupSkillsByCategory([]);
    expect(grouped.size).toBe(0);
  });
});
