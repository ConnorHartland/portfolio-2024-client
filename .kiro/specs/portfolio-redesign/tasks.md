# Implementation Plan

- [x] 1. Setup new data structures and constants





- [x] 1.1 Create background data constants file


  - Create `src/constants/background.ts` with BackgroundData interface and sample data
  - Include introduction, career journey, education entries, certifications, and personal statement
  - _Requirements: 2.1, 2.2_



- [x] 1.2 Create social links constants file




  - Create `src/constants/social.ts` with SocialLink interface


  - Extract social links from landing page into reusable constant
  - _Requirements: 1.1_


- [x] 1.3 Update skills constants with categories



  - Add SkillCategory enum to `src/constants/skills.ts`
  - Add category field to each skill object
  - Categorize existing skills appropriately
  - _Requirements: 6.1_

- [x] 1.4 Write property test for skills categorization








  - **Property 8: Skills grouped by category**
  - **Validates: Requirements 6.1**

- [x] 2. Create new Background component




- [x] 2.1 Implement Background component structure


  - Create `src/components/background.tsx`
  - Implement two-column responsive layout
  - Add sections for introduction, career journey, education, certifications
  - Use clean typography with proper spacing
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x] 2.2 Create Education card sub-component

  - Design education entry cards with institution, degree, field, year
  - Apply consistent styling with borders and padding
  - _Requirements: 2.2_

- [x] 2.3 Write unit tests for Background component











  - Test component renders without crashing
  - Test all sections are present
  - Test education cards render correctly
  - _Requirements: 2.1, 2.2_

- [x] 3. Refactor Landing Page component





- [x] 3.1 Simplify landing page layout


  - Remove complex card-based layout
  - Implement center-aligned design with large typography
  - Add circular profile image centered above name
  - Update color scheme to use solid backgrounds instead of gradients
  - _Requirements: 1.1, 1.2, 1.4_

- [x] 3.2 Extract and update social links section

  - Use social links from constants file
  - Create horizontal row of icon buttons
  - Apply hover effects with color transitions
  - _Requirements: 1.1_

- [x] 3.3 Add call-to-action button

  - Create "View My Work" button that scrolls to projects section
  - Style with primary accent color
  - _Requirements: 1.3_

- [x] 3.4 Remove skills from landing page

  - Skills will be moved to dedicated section
  - Clean up landing page to focus on introduction only
  - _Requirements: 1.1, 1.2_



- [x]* 3.5 Write unit tests for refactored landing page



  - Test name, title, and tagline are displayed
  - Test social links render correctly
  - Test CTA button is present
  - _Requirements: 1.1, 1.3_

- [x] 4. Create dedicated Skills component




- [x] 4.1 Implement Skills component with category grouping







  - Create `src/components/skills.tsx`
  - Group skills by category using SkillCategory enum
  - Render category headings with skill grids beneath
  - _Requirements: 6.1, 6.3_

- [x] 4.2 Design skill badge layout






  - Create clean badge design with icon and name
  - Remove hover overlays and descriptions
  - Use grid layout with responsive columns
  - Apply consistent spacing and borders
  - _Requirements: 6.2, 6.5_

- [x] 4.3 Write property test for skills grouping






  - **Property 8: Skills grouped by category**
  - **Validates: Requirements 6.1**

- [x] 4.4 Write unit tests for Skills component




  - Test skills render in category groups
  - Test all categories are displayed
  - Test responsive grid classes are applied
  - _Requirements: 6.1, 6.5_

- [x] 5. Redesign Experience Timeline component




- [x] 5.1 Refactor work experience to card-based layout





  - Update `src/components/work.tsx`
  - Remove timeline visual elements (lines, dots)
  - Implement clean card design for each experience
  - Add company logo, role, dates, location to card header
  - _Requirements: 4.1, 4.2, 4.3_


- [x] 5.2 Implement chronological sorting





  - Sort work experiences by start date in reverse chronological order
  - Ensure most recent experience appears first
  - _Requirements: 4.1_

- [x] 5.3 Add current position badge

  - Display "Current" badge for current positions
  - Style with accent color
  - _Requirements: 4.2_

- [x] 5.4 Style experience cards with hover effects

  - Apply border, rounded corners, padding
  - Add subtle shadow on hover
  - Ensure responsive stacking on mobile

  - _Requirements: 4.3, 4.4, 4.5_

- [x] 5.5 Write property test for chronological ordering





  - **Property 4: Work experience chronological ordering**
  - **Validates: Requirements 4.1**
  - Create `src/components/work.test.tsx`
  - Test that work experiences are always sorted in reverse chronological order
  - Use workExperienceArbitrary from test/arbitraries.ts
  - Run 100 iterations minimum

- [x] 5.6 Write property test for required fields




  - **Property 5: Work experience required fields**
  - **Validates: Requirements 4.2**
  - Test that all work experience entries contain required fields
  - Verify company name, role, dates, and at least one description are present

- [x] 5.7 Write unit tests for Experience component




  - Test experiences render as cards
  - Test current badge displays correctly
  - Test responsive classes are applied
  - _Requirements: 4.1, 4.2, 4.5_

- [x] 6. Modernize Projects component









- [x] 6.1 Implement grid-based project layout










  - Update `src/components/projects.tsx`
  - Create responsive grid (1 column mobile, 2 tablet, 3 desktop)
  - Design clean project cards with consistent styling


  - _Requirements: 5.1, 5.5_



- [x] 6.2 Design project card structure







  - Add project image at top with fixed aspect ratio


  - Display title, description, technology tags
  - Add GitHub and live demo link buttons
  - _Requirements: 5.2_



- [x] 6.3 Implement technology tags





  - Create simple pill-style tags for technologies
  - Use flex-wrap for responsive layout


  - Apply consistent styling across all tags
  - _Requirements: 5.2_



- [x] 6.4 Add description truncation



  - Truncate descriptions longer than 150 characters
  - Add "Read more" indicator or expand functionality
  - _Requirements: 5.4_


- [x] 6.5 Implement hover effects




  - Add subtle lift effect on card hover
  - Apply smooth transitions
  - _Requirements: 5.3_

- [x] 6.6 Write property test for required fields





  - **Property 6: Project required fields**
  - **Validates: Requirements 5.2**
  - Create `src/components/projects.test.tsx` or add to existing file
  - Test that all project entries contain title, description, technologies, and GitHub link
  - Use projectArbitrary from test/arbitraries.ts

- [x] 6.7 Write property test for description truncation





  - **Property 7: Project description truncation**
  - **Validates: Requirements 5.4**
  - Test that descriptions over 150 characters are truncated with indicator
  - Verify "Read more" button appears for long descriptions


- [x] 6.8 Write unit tests for Projects component



  - Test projects render in grid layout
  - Test technology tags display correctly
  - Test links are present and functional
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 7. Update Navigation component









- [x] 7.1 Add Background link to navigation



  - Update `src/components/navbar.tsx`
  - Add "Background" navigation link

  - Ensure smooth scroll to background section
  - _Requirements: 3.1_


- [x] 7.2 Add Skills link to navigation





  - Add "Skills" navigation link
  - Update navigation order appropriately
  - _Requirements: 3.1_


- [x] 7.3 Implement active section highlighting





  - Add scroll listener to detect current section
  - Apply active class to corresponding nav link
  - Use visual indicator (underline or color change)

  - _Requirements: 3.2_


- [x] 7.4 Update navbar styling




  - Simplify background to white with backdrop blur
  - Add subtle border at bottom

  - Update hover and active states
  - _Requirements: 3.3_


- [x] 7.5 Implement mobile navigation menu




  - Create hamburger menu icon for mobile
  - Implement slide-in drawer for mobile navigation
  - Ensure all links are accessible on mobile
  - _Requirements: 3.4_

- [ ] 7.6 Write property test for navigation scroll
  - **Property 1: Navigation scroll targets all sections**
  - **Validates: Requirements 3.1**
  - Create `src/components/navbar.test.tsx`
  - Test that all navigation links trigger smooth scroll to corresponding sections
  - Verify all section IDs exist in the DOM

- [ ] 7.7 Write property test for active highlighting
  - **Property 2: Active navigation highlighting**
  - **Validates: Requirements 3.2**
  - Test that active section highlighting updates based on scroll position
  - Verify only one section is active at a time

- [ ] 7.8 Write property test for scroll timing
  - **Property 3: Navigation scroll timing**
  - **Validates: Requirements 3.5**
  - Test that scroll transitions complete within 800ms
  - May require mocking or integration testing approach

- [ ] 7.9 Write unit tests for Navbar component
  - Test all navigation links render
  - Test mobile menu opens and closes
  - Test active class is applied correctly
  - _Requirements: 3.1, 3.2, 3.4_


- [x] 8. Update App component and global styles




- [x] 8.1 Add Background and Skills sections to App







  - Update `src/App.tsx` to include new sections
  - Add section IDs for navigation (#background, #skills)
  - Ensure proper section ordering
  - _Requirements: 2.1, 6.1_

- [x] 8.2 Update global color scheme


  - Modify `src/index.css` to remove gradient backgrounds
  - Implement solid color backgrounds (white/slate-950)
  - Update section backgrounds with alternating colors
  - _Requirements: 1.2_

- [x] 8.3 Apply consistent section spacing


  - Add consistent padding to all sections (py-16 lg:py-24)
  - Ensure proper container max-width and centering
  - _Requirements: 2.3, 4.4_

- [x] 8.4 Update typography scale


  - Define consistent heading sizes
  - Set proper line heights for readability
  - Apply tracking adjustments for headings
  - _Requirements: 2.4_

- [ ] 8.5 Write unit tests for App component
  - Create `src/App.test.tsx`
  - Test all sections render in correct order (home, background, experience, projects, skills)
  - Test section IDs are present for navigation
  - Test error boundaries wrap each section
  - _Requirements: 2.1, 6.1_

- [x] 9. Implement accessibility features





- [x] 9.1 Add semantic HTML throughout


  - Ensure all components use semantic elements (nav, section, article, header)
  - Replace divs with semantic alternatives where appropriate
  - _Requirements: 8.2_


- [x] 9.2 Add ARIA labels and roles

  - Add aria-label to navigation links
  - Add aria-current for active navigation
  - Add role attributes where semantic HTML is insufficient
  - _Requirements: 8.2_

- [x] 9.3 Ensure keyboard navigation


  - Test all interactive elements are keyboard accessible
  - Add proper tabIndex where needed
  - Ensure logical tab order
  - _Requirements: 8.1_


- [x] 9.4 Add focus indicators

  - Define clear focus styles in global CSS
  - Ensure focus indicators are visible on all interactive elements
  - _Requirements: 8.5_


- [x] 9.5 Add alt text to all images

  - Update all img elements with descriptive alt text
  - Add imageAlt field to project data where missing
  - Ensure skill icons have alt text
  - _Requirements: 8.4_

- [ ] 9.6 Write property test for keyboard accessibility
  - **Property 9: Keyboard accessibility**
  - **Validates: Requirements 8.1**
  - Create `src/components/accessibility.test.tsx`
  - Test that all interactive elements are keyboard accessible
  - Verify Tab, Enter, and Space key functionality

- [ ] 9.7 Write property test for semantic HTML
  - **Property 10: Semantic HTML structure**
  - **Validates: Requirements 8.2**
  - Test that components use semantic elements (nav, section, article, header)
  - Verify ARIA labels are present where needed

- [ ] 9.8 Write property test for image alt text
  - **Property 11: Image alt text presence**
  - **Validates: Requirements 8.4**
  - Test that all img elements have non-empty alt attributes
  - Can be added to existing component tests

- [x] 10. Data validation and error handling





- [x] 10.1 Create TypeScript interfaces for all data models


  - Ensure BackgroundData, SocialLink, enhanced Skill interfaces are defined
  - Add validation for required fields
  - _Requirements: 9.2_

- [x] 10.2 Implement error boundary component


  - Create `src/components/error-boundary.tsx`
  - Wrap major sections with error boundaries
  - Add fallback UI for errors
  - _Requirements: 7.1_

- [x] 10.3 Add image error handling


  - Implement onError handlers for images
  - Provide fallback images for broken URLs
  - _Requirements: 7.2_

- [ ] 10.4 Write property test for data structure validation
  - **Property 12: Project data structure validation**
  - **Validates: Requirements 9.2**
  - Create `src/types/project.test.ts` or add to existing validation tests
  - Test that project data conforms to Project interface
  - Verify all required fields are present and valid

- [ ] 10.5 Write unit tests for error boundary
  - Create `src/components/error-boundary.test.tsx`
  - Test error boundary catches errors from child components
  - Test fallback UI is displayed when error occurs
  - Test retry functionality
  - _Requirements: 7.1_

- [x] 11. Responsive design implementation





- [x] 11.1 Test and refine mobile layouts


  - Verify all sections stack properly on mobile
  - Ensure touch targets are appropriately sized (min 44x44px)
  - Test mobile navigation functionality
  - _Requirements: 10.3_



- [x] 11.2 Test and refine tablet layouts
  - Verify two-column layouts work at tablet breakpoints
  - Test grid adjustments for projects and skills

  - _Requirements: 10.2_

- [x] 11.3 Test and refine desktop layouts

  - Verify multi-column layouts utilize space effectively
  - Test max-width constraints
  - Ensure proper whitespace distribution
  - _Requirements: 10.1_


- [x] 11.4 Prevent horizontal scrolling

  - Add overflow-x-hidden where needed
  - Test all breakpoint transitions
  - Ensure no content exceeds viewport width
  - _Requirements: 10.4_

- [ ] 11.5 Write unit tests for responsive behavior
  - Can be integrated into existing component tests
  - Test responsive classes are applied (grid-cols-1, md:grid-cols-2, lg:grid-cols-3)
  - Test mobile menu appears at mobile breakpoints
  - Test touch target sizes meet 44x44px minimum
  - _Requirements: 10.1, 10.2, 10.3_

- [x] 12. Setup testing infrastructure




- [x] 12.1 Install and configure Vitest


  - Add Vitest and React Testing Library dependencies
  - Create vitest.config.ts
  - Set up test environment
  - _Requirements: All testing requirements_

- [x] 12.2 Install and configure fast-check


  - Add fast-check dependency for property-based testing
  - Create test utilities and arbitraries file
  - Configure minimum 100 iterations per property test
  - _Requirements: All property testing requirements_

- [x] 12.3 Create test data generators


  - Create `src/test/arbitraries.ts`
  - Implement arbitraries for WorkExperience, Project, Skill, BackgroundData
  - Ensure generators create realistic test data
  - _Requirements: All property testing requirements_

- [x] 12.4 Set up test scripts in package.json


  - Add test, test:watch, test:coverage scripts
  - Configure coverage thresholds
  - _Requirements: All testing requirements_

- [x] 13. Enforce TypeScript type safety






- [x] 13.1 Configure ESLint to ban explicit any types


  - Update `eslint.config.js` to include `@typescript-eslint/no-explicit-any` rule set to error
  - Ensure rule applies to all TypeScript files
  - _Requirements: 11.3_

- [x] 13.2 Audit codebase for explicit any types


  - Run ESLint to identify all explicit `any` type usages
  - Create list of files that need type fixes
  - _Requirements: 11.1_

- [x] 13.3 Replace any types with proper type definitions


  - Fix all identified `any` types with appropriate TypeScript types
  - Add custom type declarations for third-party libraries if needed
  - Ensure all function parameters and return types are explicitly typed
  - _Requirements: 11.1, 11.4, 11.5_

- [x] 13.4 Verify TypeScript strict mode compliance


  - Ensure `tsconfig.json` has `"strict": true` enabled
  - Run `pnpm tsc --noEmit` to verify no type errors
  - Fix any type errors that appear
  - _Requirements: 11.2_

- [x] 13.5 Write property test for no explicit any types


  - **Property 13: TypeScript type safety - no explicit any types**
  - **Validates: Requirements 11.1**
  - Create `src/test/type-safety.test.ts`
  - Use static analysis or AST parsing to verify no explicit `any` types exist
  - This may be better enforced through ESLint than property testing


- [x] 13.6 Write property test for strict mode compliance

  - **Property 14: TypeScript strict mode compliance**
  - **Validates: Requirements 11.2**
  - Verify TypeScript compilation succeeds with strict mode
  - This is better enforced through CI/build process than property testing

- [ ] 14. Final checkpoint - Ensure all tests pass
  - Run `pnpm test` to execute all tests
  - Run `pnpm lint` to verify no ESLint errors including no-explicit-any
  - Run `pnpm tsc --noEmit` to verify TypeScript compilation
  - Verify all property-based tests pass with 100+ iterations
  - Fix any failing tests
  - Ensure all tests pass, ask the user if questions arise.

---

## Implementation Status Summary

### ✅ Completed
- All core UI components implemented (Landing, Background, Skills, Projects, Experience, Navbar)
- Data structures and constants created (background, social, skills)
- Error handling with ErrorBoundary and SafeImage components
- Responsive design with Tailwind CSS
- Accessibility features (semantic HTML, ARIA labels, keyboard navigation, focus indicators)
- Testing infrastructure (Vitest, React Testing Library, fast-check)
- Test arbitraries for property-based testing
- Unit tests for Background, Landing Page, and Skills components
- Property test for skills categorization (Property 8)

### 🔄 Remaining Work
The following tasks remain to complete the full test coverage as specified in the design:

**Required:**
- Task 5.5: Property test for work experience chronological ordering (Property 4)

**All Remaining Tasks (now required):**
- Task 5.5: Property test for work experience chronological ordering (Property 4)
- Tasks 5.6-5.7: Additional work experience tests (Property 5 + unit tests)
- Tasks 6.6-6.8: Project component tests (Properties 6-7 + unit tests)
- Tasks 7.6-7.9: Navigation component tests (Properties 1-3 + unit tests)
- Task 8.5: App component unit tests
- Tasks 9.6-9.8: Accessibility property tests (Properties 9-11)
- Tasks 10.4-10.5: Data validation and error boundary tests (Property 12 + unit tests)
- Task 11.5: Responsive behavior unit tests
- Task 13: Final checkpoint to ensure all tests pass

All tests are now required for comprehensive coverage as requested.
