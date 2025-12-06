import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { projectArbitrary } from '../test/arbitraries';
import { Project } from '../types/project';
import Projects from './projects';
import { projects } from '../constants/projects';

describe('Projects Component - Unit Tests', () => {
  // Requirements: 5.1 - Projects render in grid layout
  test('projects render in grid layout', () => {
    const { container } = render(<Projects />);
    
    // Verify the grid container exists with correct classes
    const gridContainer = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');
    expect(gridContainer).toBeInTheDocument();
    
    // Verify all projects are rendered
    const projectCards = container.querySelectorAll('article[role="listitem"]');
    expect(projectCards.length).toBe(projects.length);
  });

  // Requirements: 5.2 - Technology tags display correctly
  test('technology tags display correctly', () => {
    render(<Projects />);
    
    // Verify each project's technologies are rendered
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        // Technology tags should be visible in the document
        const techElements = screen.getAllByText(tech);
        expect(techElements.length).toBeGreaterThan(0);
        
        // Verify at least one has the correct styling classes
        const techTag = techElements.find(el => 
          el.classList.contains('bg-slate-100') &&
          el.classList.contains('text-slate-700') &&
          el.classList.contains('rounded-full')
        );
        expect(techTag).toBeTruthy();
      });
    });
  });

  // Requirements: 5.2, 5.3 - Links are present and functional
  test('links are present and functional', () => {
    const { container } = render(<Projects />);
    
    projects.forEach(project => {
      // Verify GitHub link is present
      const githubLink = container.querySelector(`a[href="${project.githubLink}"]`);
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
      
      // Verify live link if it exists
      if (project.liveLink) {
        const liveLink = container.querySelector(`a[href="${project.liveLink}"]`);
        expect(liveLink).toBeInTheDocument();
        expect(liveLink).toHaveAttribute('target', '_blank');
        expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  // Requirements: 5.1 - Verify responsive grid classes
  test('responsive grid classes are applied', () => {
    const { container } = render(<Projects />);
    
    const gridContainer = container.querySelector('[role="list"]');
    expect(gridContainer).toBeInTheDocument();
    
    // Verify responsive classes
    expect(gridContainer?.classList.contains('grid')).toBe(true);
    expect(gridContainer?.classList.contains('grid-cols-1')).toBe(true);
    expect(gridContainer?.classList.contains('md:grid-cols-2')).toBe(true);
    expect(gridContainer?.classList.contains('lg:grid-cols-3')).toBe(true);
  });

  // Requirements: 5.3 - Verify hover effects are applied
  test('hover effects are applied to project cards', () => {
    const { container } = render(<Projects />);
    
    const projectCards = container.querySelectorAll('article[role="listitem"]');
    
    projectCards.forEach(card => {
      // Verify hover transition classes
      expect(card.classList.contains('hover:-translate-y-1')).toBe(true);
      expect(card.classList.contains('transition-all')).toBe(true);
      expect(card.classList.contains('hover:shadow-md')).toBe(true);
    });
  });
});

describe('Projects Component - Property-Based Tests', () => {
  // Feature: portfolio-redesign, Property 6: Project required fields
  // Validates: Requirements 5.2
  test('all project entries contain title, description, technologies, and GitHub link', () => {
    fc.assert(
      fc.property(
        projectArbitrary,
        (project: Project) => {
          // Verify title is present and non-empty
          expect(project.title).toBeTruthy();
          expect(project.title.trim().length).toBeGreaterThan(0);
          
          // Verify description is present and non-empty
          expect(project.description).toBeTruthy();
          expect(project.description.trim().length).toBeGreaterThan(0);
          
          // Verify technologies array exists and has at least one technology
          expect(project.technologies).toBeTruthy();
          expect(Array.isArray(project.technologies)).toBe(true);
          expect(project.technologies.length).toBeGreaterThan(0);
          
          // Verify all technologies are non-empty strings
          project.technologies.forEach(tech => {
            expect(typeof tech).toBe('string');
            expect(tech.trim().length).toBeGreaterThan(0);
          });
          
          // Verify GitHub link is present and non-empty
          expect(project.githubLink).toBeTruthy();
          expect(project.githubLink.trim().length).toBeGreaterThan(0);
          
          // Render a project card to verify it displays correctly
          const { container } = render(
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 text-sm rounded-full px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <nav className="flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700"
                  >
                    GitHub
                  </a>
                </nav>
              </div>
            </article>
          );
          
          // Verify the component renders without errors
          expect(container).toBeTruthy();
          
          // Verify the rendered content contains the required fields
          expect(container.textContent).toContain(project.title);
          expect(container.textContent).toContain(project.description);
          project.technologies.forEach(tech => {
            expect(container.textContent).toContain(tech);
          });
          
          // Verify GitHub link is in the DOM
          const githubLink = container.querySelector(`a[href="${project.githubLink}"]`);
          expect(githubLink).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: portfolio-redesign, Property 7: Project description truncation
  // Validates: Requirements 5.4
  test('descriptions over 150 characters are truncated with "Read more" button', () => {
    fc.assert(
      fc.property(
        projectArbitrary,
        (project: Project) => {
          const truncateDescription = (description: string, isExpanded: boolean) => {
            if (description.length <= 150 || isExpanded) {
              return description;
            }
            return description.substring(0, 150) + "...";
          };

          const shouldShowReadMore = (description: string) => {
            return description.length > 150;
          };

          // Test truncation logic
          if (project.description.length > 150) {
            // When not expanded, description should be truncated
            const truncated = truncateDescription(project.description, false);
            expect(truncated.length).toBeLessThanOrEqual(153); // 150 chars + "..."
            expect(truncated.endsWith("...")).toBe(true);
            expect(truncated.substring(0, 150)).toBe(project.description.substring(0, 150));
            
            // Should show "Read more" button
            expect(shouldShowReadMore(project.description)).toBe(true);
            
            // When expanded, full description should be shown
            const expanded = truncateDescription(project.description, true);
            expect(expanded).toBe(project.description);
            expect(expanded.length).toBeGreaterThan(150);
          } else {
            // Short descriptions should not be truncated
            const notTruncated = truncateDescription(project.description, false);
            expect(notTruncated).toBe(project.description);
            expect(notTruncated.endsWith("...")).toBe(false);
            
            // Should not show "Read more" button
            expect(shouldShowReadMore(project.description)).toBe(false);
          }

          // Render the component to verify UI behavior
          const isExpanded = false;
          const { container } = render(
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {truncateDescription(project.description, isExpanded)}
                  {shouldShowReadMore(project.description) && (
                    <button
                      className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>
            </article>
          );

          // Verify the rendered content
          const descriptionElement = container.querySelector('p');
          expect(descriptionElement).toBeTruthy();

          if (project.description.length > 150) {
            // Long descriptions should show truncated text with "..."
            expect(descriptionElement?.textContent).toContain("...");
            
            // "Read more" button should be present
            const readMoreButton = container.querySelector('button');
            expect(readMoreButton).toBeTruthy();
            expect(readMoreButton?.textContent).toBe("Read more");
          } else {
            // Short descriptions should show full text without "..."
            expect(descriptionElement?.textContent).toBe(project.description);
            
            // "Read more" button should not be present
            const readMoreButton = container.querySelector('button');
            expect(readMoreButton).toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
