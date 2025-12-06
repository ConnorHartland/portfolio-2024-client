# Design Document: Portfolio Website Redesign

## Overview

This design document outlines the modernization of a personal portfolio website for a DevOps Engineer/Software Developer. The redesign emphasizes simplicity, clean aesthetics, and improved content organization while maintaining the existing React + TypeScript + Tailwind CSS technology stack. The primary goals are to create a more contemporary visual design with better whitespace utilization, add a comprehensive background section, and streamline the user experience across all sections.

The redesign will transform the current gradient-heavy, card-based interface into a cleaner, more minimalist design that prioritizes content readability and professional presentation. All existing functionality will be preserved while enhancing visual hierarchy and information architecture.

## Architecture

### High-Level Structure

The application maintains its single-page application (SPA) architecture with the following section hierarchy:

```
App (Root Container)
├── Navbar (Fixed Navigation)
└── Main Content
    ├── Landing Section (#home)
    ├── Background Section (#background) [NEW]
    ├── Experience Section (#experience)
    ├── Projects Section (#projects)
    └── Skills Section (#skills) [RELOCATED]
```

### Component Organization

**Existing Components (To Be Refactored):**
- `landing-page.tsx` - Simplified hero section
- `navbar.tsx` - Enhanced with new background link
- `work.tsx` - Redesigned experience timeline
- `projects.tsx` - Modernized project cards

**New Components:**
- `background.tsx` - Professional narrative and education
- `skills.tsx` - Extracted from landing page into dedicated section

### Design System

**Color Palette (Simplified):**
- Primary Background: `bg-white` (light mode) / `bg-slate-950` (dark mode)
- Secondary Background: `bg-gray-50` / `bg-slate-900`
- Accent Colors: 
  - Primary: `text-blue-600` / `text-blue-400`
  - Secondary: `text-slate-600` / `text-slate-300`
- Text: `text-slate-900` / `text-white`
- Borders: `border-slate-200` / `border-slate-700`

**Typography:**
- Headings: `font-bold` with increased `tracking-tight`
- Body: `font-normal` with `leading-relaxed`
- Size Scale: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`

**Spacing System:**
- Section Padding: `py-16 lg:py-24`
- Container Max Width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Element Spacing: Consistent use of `space-y-4`, `space-y-6`, `space-y-8`

**Visual Effects:**
- Shadows: `shadow-sm`, `shadow-md` (subtle, no heavy shadows)
- Borders: `border` with `rounded-lg` or `rounded-xl`
- Hover States: `transition-all duration-300` with subtle scale or color changes
- No gradients in backgrounds (solid colors only)

## Components and Interfaces

### 1. Navbar Component

**Purpose:** Provide persistent navigation across all sections

**Interface:**
```typescript
interface NavLink {
  label: string;
  target: string; // Section ID
}

const navLinks: NavLink[] = [
  { label: "Home", target: "home" },
  { label: "Background", target: "background" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" }
];
```

**Design Changes:**
- Simplified background: `bg-white/80 backdrop-blur-md` with `border-b border-slate-200`
- Active link indicator: Underline with `border-b-2 border-blue-600`
- Mobile: Hamburger menu with slide-in drawer
- Sticky positioning maintained

### 2. Landing Page Component

**Purpose:** Create immediate impact with clear professional identity

**Interface:**
```typescript
interface LandingContent {
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}
```

**Design Changes:**
- Remove complex card layout
- Center-aligned content with large typography
- Profile image: Circular, `w-32 h-32`, centered above name
- Name: `text-5xl lg:text-6xl font-bold`
- Title: `text-2xl lg:text-3xl text-slate-600`
- Tagline: `text-lg lg:text-xl text-slate-500`
- Social links: Horizontal row of icon buttons below tagline
- Background: Solid white with subtle pattern or plain
- Call-to-action: "View My Work" button scrolling to projects

### 3. Background Component (NEW)

**Purpose:** Provide comprehensive professional narrative

**Interface:**
```typescript
interface BackgroundContent {
  introduction: string;
  education: EducationEntry[];
  certifications: string[];
  careerHighlights: string[];
  personalStatement: string;
}

interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationYear: number;
  achievements?: string[];
}
```

**Design:**
- Two-column layout on desktop (60/40 split)
- Left column: Narrative text with proper line height (`leading-relaxed`)
- Right column: Education cards and certifications
- Typography: `text-lg` for body text, `text-2xl` for section headings
- Background: Alternating section color (`bg-gray-50`)
- Content organized with clear visual hierarchy

**Content Structure:**
```
Background Section
├── Introduction Paragraph
├── Career Journey
│   ├── How I got started
│   ├── Key transitions
│   └── Current focus
├── Education
│   └── Degree cards
├── Certifications
│   └── Badge list
└── Personal Statement
```

### 4. Experience Timeline Component

**Purpose:** Display work history in scannable format

**Interface:**
```typescript
interface WorkExperience {
  companyName: string;
  image: string;
  role: string;
  dates: string;
  location: string;
  current: boolean;
  description: string[];
}
```

**Design Changes:**
- Remove timeline visual elements (lines, dots)
- Card-based layout: Each experience is a clean card
- Company logo: Small, `w-16 h-16`, top-left of card
- Layout: Vertical stack with consistent spacing
- Card styling: `bg-white border border-slate-200 rounded-xl p-6`
- Hover effect: `hover:shadow-md transition-shadow`
- Responsive: Full width on mobile, max-width on desktop

**Card Structure:**
```
Experience Card
├── Header Row
│   ├── Company Logo
│   ├── Company Name (text-xl font-semibold)
│   └── Current Badge (if applicable)
├── Role (text-lg text-blue-600)
├── Meta Info (dates, location)
└── Description List
    └── Bullet points with achievements
```

### 5. Projects Gallery Component

**Purpose:** Showcase completed projects with technologies

**Interface:**
```typescript
interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
  imageAlt?: string;
  blogPost?: string;
}
```

**Design Changes:**
- Grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card design: Clean, bordered cards with image at top
- Image: Fixed aspect ratio `aspect-video`, object-fit cover
- Content padding: `p-6`
- Technology tags: Simple pills with `bg-slate-100 text-slate-700 rounded-full px-3 py-1 text-sm`
- Links: Icon buttons for GitHub and Live Demo
- Hover: Subtle lift effect `hover:-translate-y-1`

**Card Structure:**
```
Project Card
├── Project Image (if available)
├── Title (text-xl font-semibold)
├── Description (text-slate-600, line-clamp-3)
├── Technology Tags (flex-wrap)
└── Action Links
    ├── GitHub Link
    └── Live Demo Link (if available)
```

### 6. Skills Component (Relocated)

**Purpose:** Display technical competencies in organized manner

**Interface:**
```typescript
interface Skill {
  name: string;
  image: string;
  description: string | null;
  category: SkillCategory;
}

enum SkillCategory {
  Cloud = "Cloud & Infrastructure",
  DevOps = "DevOps & Automation",
  Frontend = "Frontend Development",
  Backend = "Backend Development",
  Database = "Databases"
}
```

**Design Changes:**
- Remove hover overlays with descriptions
- Group skills by category
- Each category: Heading + grid of skill badges
- Badge design: `flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3`
- Icon: `w-8 h-8` next to skill name
- Layout: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- No descriptions on hover (cleaner, simpler)

## Data Models

### Background Data Model (NEW)

```typescript
// src/constants/background.ts
export interface BackgroundData {
  introduction: string;
  careerJourney: {
    start: string;
    transitions: string[];
    currentFocus: string;
  };
  education: EducationEntry[];
  certifications: string[];
  personalStatement: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationYear: number;
  location: string;
  achievements?: string[];
}

export const backgroundData: BackgroundData = {
  introduction: "...",
  careerJourney: {
    start: "...",
    transitions: ["...", "..."],
    currentFocus: "..."
  },
  education: [
    {
      institution: "University Name",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationYear: 2020,
      location: "City, State",
      achievements: ["Dean's List", "..."]
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "..."
  ],
  personalStatement: "..."
};
```

### Enhanced Skill Model

```typescript
// src/constants/skills.ts
export enum SkillCategory {
  Cloud = "Cloud & Infrastructure",
  DevOps = "DevOps & Automation",
  Frontend = "Frontend Development",
  Backend = "Backend Development",
  Database = "Databases"
}

export interface Skill {
  name: string;
  image: string;
  description: string | null;
  category: SkillCategory;
}

export const skills: Skill[] = [
  {
    name: "AWS",
    image: "aws.png",
    description: "Expert in managing and deploying AWS infrastructure.",
    category: SkillCategory.Cloud
  },
  // ... more skills
];
```

### Social Links Model

```typescript
// src/constants/social.ts
export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
  color: string; // Tailwind color class
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/ConnorHartland",
    icon: FaGithub,
    color: "text-slate-900 hover:text-slate-700"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/connor-hartland-88a34b114/",
    icon: FaLinkedin,
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    platform: "Email",
    url: "mailto:connorhartland@gmail.com",
    icon: FaEnvelope,
    color: "text-slate-600 hover:text-slate-700"
  }
];
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation scroll targets all sections

*For any* navigation link in the navbar, clicking it should trigger smooth scroll behavior to the corresponding section ID.
**Validates: Requirements 3.1**

### Property 2: Active navigation highlighting

*For any* scroll position within a section's boundaries, the navigation bar should highlight the corresponding navigation link as active.
**Validates: Requirements 3.2**

### Property 3: Navigation scroll timing

*For any* navigation link click, the scroll transition to the target section should complete within 800 milliseconds.
**Validates: Requirements 3.5**

### Property 4: Work experience chronological ordering

*For any* set of work experiences, they should be displayed in reverse chronological order (most recent first) based on the start date.
**Validates: Requirements 4.1**

### Property 5: Work experience required fields

*For any* work experience entry, the rendered output should contain the company name, role, duration, and at least one responsibility description.
**Validates: Requirements 4.2**

### Property 6: Project required fields

*For any* project entry, the rendered output should contain the project name, description, at least one technology tag, and a GitHub link.
**Validates: Requirements 5.2**

### Property 7: Project description truncation

*For any* project with a description exceeding 150 characters, the rendered output should truncate the text and provide a visual indicator for expansion.
**Validates: Requirements 5.4**

### Property 8: Skills grouped by category

*For any* set of skills, they should be rendered in groups where all skills within a group share the same category value.
**Validates: Requirements 6.1**

### Property 9: Keyboard accessibility

*For any* interactive element (links, buttons, navigation items), it should be reachable and activatable using only keyboard navigation (Tab, Enter, Space).
**Validates: Requirements 8.1**

### Property 10: Semantic HTML structure

*For any* component, the rendered HTML should use semantic elements (nav, section, article, header, footer) and include appropriate ARIA labels where semantic HTML is insufficient.
**Validates: Requirements 8.2**

### Property 11: Image alt text presence

*For any* img element rendered in the application, it should have a non-empty alt attribute.
**Validates: Requirements 8.4**

### Property 12: Project data structure validation

*For any* project object added to the projects array, it should conform to the Project interface with all required fields (title, description, githubLink, technologies array).
**Validates: Requirements 9.2**

### Property 13: TypeScript type safety - no explicit any types

*For any* TypeScript source file in the codebase, it should contain zero explicit `any` type annotations.
**Validates: Requirements 11.1**

### Property 14: TypeScript strict mode compliance

*For any* TypeScript source file, when compiled with strict mode enabled, it should produce zero type errors.
**Validates: Requirements 11.2**

## Error Handling

### Component Error Boundaries

Implement React Error Boundaries around major sections to prevent cascading failures:

```typescript
// src/components/error-boundary.tsx
class SectionErrorBoundary extends React.Component<Props, State> {
  // Catches errors in child components
  // Displays fallback UI
  // Logs error details for debugging
}
```

### Data Validation

**Constants File Validation:**
- Validate data structure on import using TypeScript interfaces
- Provide default fallback values for optional fields
- Log warnings for malformed data entries

**Image Loading:**
- Implement fallback images for broken image URLs
- Use `onError` handlers to replace failed images
- Provide alt text for all images

### Navigation Error Handling

- Validate section IDs exist before scrolling
- Fallback to top of page if section not found
- Handle scroll interruptions gracefully

### Responsive Breakpoint Handling

- Use Tailwind's responsive prefixes consistently
- Test breakpoint transitions
- Ensure no layout breaks between breakpoints

## Testing Strategy

### Unit Testing

**Framework:** Vitest with React Testing Library

**Test Coverage Areas:**

1. **Component Rendering Tests:**
   - Each component renders without crashing
   - Required props are passed correctly
   - Conditional rendering works as expected

2. **Data Transformation Tests:**
   - Skills are correctly grouped by category
   - Work experiences are sorted chronologically
   - Project data conforms to interface

3. **User Interaction Tests:**
   - Navigation links trigger scroll behavior
   - Hover states apply correct classes
   - Mobile menu opens and closes

4. **Accessibility Tests:**
   - Semantic HTML elements are used
   - ARIA labels are present where needed
   - Keyboard navigation works

**Example Unit Tests:**

```typescript
// src/components/navbar.test.tsx
describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    // ... more links
  });

  it('applies active class to current section', () => {
    render(<Navbar />);
    // Simulate scroll to experience section
    // Assert active class is applied
  });
});
```

### Property-Based Testing

**Framework:** fast-check (JavaScript/TypeScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Use seed for reproducible failures
- Generate realistic test data

**Property Test Implementation:**

Each property-based test MUST:
1. Be tagged with a comment referencing the design document property
2. Use the format: `// Feature: portfolio-redesign, Property {number}: {property_text}`
3. Run at least 100 iterations
4. Generate appropriate test data using fast-check arbitraries

**Example Property Tests:**

```typescript
// src/components/work.test.tsx
import fc from 'fast-check';

// Feature: portfolio-redesign, Property 4: Work experience chronological ordering
test('work experiences are displayed in reverse chronological order', () => {
  fc.assert(
    fc.property(
      fc.array(workExperienceArbitrary, { minLength: 2, maxLength: 10 }),
      (experiences) => {
        const { container } = render(<ExperienceTimeline experiences={experiences} />);
        const renderedDates = extractDatesFromDOM(container);
        const sortedDates = [...experiences]
          .sort((a, b) => parseDate(b.dates) - parseDate(a.dates))
          .map(e => e.dates);
        expect(renderedDates).toEqual(sortedDates);
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: portfolio-redesign, Property 5: Work experience required fields
test('all work experience entries contain required fields', () => {
  fc.assert(
    fc.property(
      workExperienceArbitrary,
      (experience) => {
        const { container } = render(<ExperienceCard experience={experience} />);
        expect(container).toHaveTextContent(experience.companyName);
        expect(container).toHaveTextContent(experience.role);
        expect(container).toHaveTextContent(experience.dates);
        expect(experience.description.length).toBeGreaterThan(0);
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: portfolio-redesign, Property 6: Project required fields
test('all project entries contain required fields', () => {
  fc.assert(
    fc.property(
      projectArbitrary,
      (project) => {
        const { container } = render(<ProjectCard project={project} />);
        expect(container).toHaveTextContent(project.title);
        expect(container).toHaveTextContent(project.description);
        expect(project.technologies.length).toBeGreaterThan(0);
        expect(container.querySelector(`a[href="${project.githubLink}"]`)).toBeInTheDocument();
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: portfolio-redesign, Property 8: Skills grouped by category
test('skills are rendered in category groups', () => {
  fc.assert(
    fc.property(
      fc.array(skillArbitrary, { minLength: 5, maxLength: 20 }),
      (skills) => {
        const { container } = render(<Skills skills={skills} />);
        const categories = [...new Set(skills.map(s => s.category))];
        
        categories.forEach(category => {
          const categorySkills = skills.filter(s => s.category === category);
          const categorySection = container.querySelector(`[data-category="${category}"]`);
          expect(categorySection).toBeInTheDocument();
          
          categorySkills.forEach(skill => {
            expect(categorySection).toHaveTextContent(skill.name);
          });
        });
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: portfolio-redesign, Property 11: Image alt text presence
test('all images have non-empty alt text', () => {
  fc.assert(
    fc.property(
      fc.array(projectArbitrary, { minLength: 1, maxLength: 10 }),
      (projects) => {
        const { container } = render(<Projects projects={projects} />);
        const images = container.querySelectorAll('img');
        
        images.forEach(img => {
          const altText = img.getAttribute('alt');
          expect(altText).toBeTruthy();
          expect(altText.length).toBeGreaterThan(0);
        });
      }
    ),
    { numRuns: 100 }
  );
});
```

**Test Data Generators (Arbitraries):**

```typescript
// src/test/arbitraries.ts
import fc from 'fast-check';

export const workExperienceArbitrary = fc.record({
  companyName: fc.string({ minLength: 3, maxLength: 50 }),
  image: fc.webUrl(),
  role: fc.string({ minLength: 5, maxLength: 50 }),
  dates: fc.string({ minLength: 10, maxLength: 30 }),
  location: fc.string({ minLength: 5, maxLength: 50 }),
  current: fc.boolean(),
  description: fc.array(fc.string({ minLength: 20, maxLength: 200 }), { minLength: 1, maxLength: 5 })
});

export const projectArbitrary = fc.record({
  title: fc.string({ minLength: 3, maxLength: 50 }),
  description: fc.string({ minLength: 20, maxLength: 500 }),
  imageUrl: fc.option(fc.webUrl(), { nil: undefined }),
  githubLink: fc.webUrl(),
  liveLink: fc.option(fc.webUrl(), { nil: undefined }),
  technologies: fc.array(fc.string({ minLength: 2, maxLength: 20 }), { minLength: 1, maxLength: 8 }),
  imageAlt: fc.option(fc.string({ minLength: 5, maxLength: 100 }), { nil: undefined })
});

export const skillArbitrary = fc.record({
  name: fc.string({ minLength: 2, maxLength: 30 }),
  image: fc.string({ minLength: 5, maxLength: 50 }),
  description: fc.option(fc.string({ minLength: 10, maxLength: 200 }), { nil: null }),
  category: fc.constantFrom(
    SkillCategory.Cloud,
    SkillCategory.DevOps,
    SkillCategory.Frontend,
    SkillCategory.Backend,
    SkillCategory.Database
  )
});
```

### Integration Testing

**Focus Areas:**
- Navigation flow between all sections
- Responsive behavior at different breakpoints
- Scroll behavior and section highlighting
- Data loading and rendering pipeline

### Accessibility Testing

**Tools:**
- axe-core for automated accessibility testing
- Manual keyboard navigation testing
- Screen reader testing (NVDA/JAWS)

**Test Cases:**
- All interactive elements are keyboard accessible
- Focus indicators are visible
- Semantic HTML is used throughout
- ARIA labels are present where needed
- Color contrast meets WCAG AA standards

### Visual Regression Testing

**Approach:**
- Capture screenshots at key breakpoints
- Compare against baseline images
- Flag unexpected visual changes

**Tools:** Playwright or Chromatic

## Implementation Notes

### Migration Strategy

1. **Phase 1: Setup and Infrastructure**
   - Add new constants files (background.ts, social.ts)
   - Update skill model with categories
   - Create new component files

2. **Phase 2: Component Refactoring**
   - Refactor landing page (simplify, extract skills)
   - Create background component
   - Redesign experience timeline
   - Modernize project cards
   - Create dedicated skills section

3. **Phase 3: Styling Updates**
   - Remove gradient backgrounds
   - Apply new color palette
   - Update typography scale
   - Implement consistent spacing

4. **Phase 4: Testing**
   - Write unit tests for all components
   - Implement property-based tests
   - Conduct accessibility audit
   - Test responsive behavior

5. **Phase 5: Polish**
   - Optimize images
   - Add loading states
   - Implement error boundaries
   - Final accessibility review

### Performance Considerations

- Lazy load images using native `loading="lazy"`
- Use React.memo for expensive components
- Implement code splitting for blog post viewer
- Optimize bundle size with tree shaking
- Use CSS containment for independent sections

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties
- No IE11 support required

### Accessibility Standards

- WCAG 2.1 Level AA compliance
- Semantic HTML5 elements
- ARIA labels where semantic HTML insufficient
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast ratios (4.5:1 for normal text)
