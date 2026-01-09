import fc from 'fast-check';
import { Skill, SkillCategory } from '../constants/skills';
import { WorkExperience } from '../types/work';
import { Project } from '../types/project';
import { BackgroundData, EducationEntry, CareerJourney } from '../types/background';

// Skill arbitraries
export const skillCategoryArbitrary = fc.constantFrom(
  SkillCategory.Cloud,
  SkillCategory.DevOps,
  SkillCategory.Frontend,
  SkillCategory.Backend,
  SkillCategory.Database
);

export const skillArbitrary: fc.Arbitrary<Skill> = fc.record({
  name: fc.string({ minLength: 2, maxLength: 30 }),
  image: fc.string({ minLength: 5, maxLength: 50 }),
  description: fc.option(fc.string({ minLength: 10, maxLength: 200 }), { nil: null }),
  category: skillCategoryArbitrary
});

// WorkExperience arbitrary
export const workExperienceArbitrary: fc.Arbitrary<WorkExperience> = fc.record({
  companyName: fc.string({ minLength: 3, maxLength: 50 }),
  image: fc.webUrl(),
  role: fc.string({ minLength: 5, maxLength: 50 }),
  dates: fc.string({ minLength: 10, maxLength: 30 }),
  location: fc.string({ minLength: 5, maxLength: 50 }),
  current: fc.boolean(),
  description: fc.array(fc.string({ minLength: 20, maxLength: 200 }), { minLength: 1, maxLength: 5 })
});

// Project arbitrary
export const projectArbitrary: fc.Arbitrary<Project> = fc.record({
  title: fc.string({ minLength: 3, maxLength: 50 }),
  description: fc.string({ minLength: 20, maxLength: 500 }),
  imageUrl: fc.option(fc.webUrl(), { nil: undefined }),
  githubLink: fc.webUrl(),
  liveLink: fc.option(fc.webUrl(), { nil: undefined }),
  technologies: fc.array(fc.string({ minLength: 2, maxLength: 20 }), { minLength: 1, maxLength: 8 }),
  imageAlt: fc.option(fc.string({ minLength: 5, maxLength: 100 }), { nil: undefined }),
  blogPost: fc.option(fc.string({ minLength: 5, maxLength: 100 }), { nil: undefined })
});

// EducationEntry arbitrary
export const educationEntryArbitrary: fc.Arbitrary<EducationEntry> = fc.record({
  institution: fc.string({ minLength: 5, maxLength: 100 }),
  degree: fc.constantFrom('Bachelor of Science', 'Master of Science', 'PhD', 'Associate Degree'),
  field: fc.string({ minLength: 5, maxLength: 50 }),
  graduationYear: fc.integer({ min: 1950, max: new Date().getFullYear() + 10 }),
  location: fc.string({ minLength: 5, maxLength: 50 }),
  achievements: fc.option(fc.array(fc.string({ minLength: 10, maxLength: 100 }), { minLength: 0, maxLength: 5 }), { nil: undefined })
});

// CareerJourney arbitrary
export const careerJourneyArbitrary: fc.Arbitrary<CareerJourney> = fc.record({
  start: fc.string({ minLength: 50, maxLength: 300 }),
  transitions: fc.array(fc.string({ minLength: 50, maxLength: 300 }), { minLength: 0, maxLength: 5 }),
  currentFocus: fc.string({ minLength: 50, maxLength: 300 })
});

// BackgroundData arbitrary
export const backgroundDataArbitrary: fc.Arbitrary<BackgroundData> = fc.record({
  introduction: fc.string({ minLength: 100, maxLength: 500 }),
  careerJourney: careerJourneyArbitrary,
  education: fc.array(educationEntryArbitrary, { minLength: 1, maxLength: 3 }),
  certifications: fc.array(fc.string({ minLength: 10, maxLength: 100 }), { minLength: 0, maxLength: 10 }),
  personalStatement: fc.string({ minLength: 100, maxLength: 500 })
});
