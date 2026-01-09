import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Background from './background';
import { backgroundData } from '../constants/background';

describe('Background Component', () => {
  test('component renders without crashing', () => {
    const { container } = render(<Background />);
    expect(container).toBeInTheDocument();
  });

  test('all main sections are present', () => {
    render(<Background />);
    
    // Check for main heading
    expect(screen.getByRole('heading', { name: /background/i, level: 2 })).toBeInTheDocument();
    
    // Check for Introduction section
    expect(screen.getByRole('heading', { name: /introduction/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(backgroundData.introduction)).toBeInTheDocument();
    
    // Check for Career Journey section
    expect(screen.getByRole('heading', { name: /career journey/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(backgroundData.careerJourney.start)).toBeInTheDocument();
    expect(screen.getByText(backgroundData.careerJourney.currentFocus)).toBeInTheDocument();
    
    // Check for Personal Statement section
    expect(screen.getByRole('heading', { name: /personal statement/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(backgroundData.personalStatement)).toBeInTheDocument();
    
    // Check for Education section
    expect(screen.getByRole('heading', { name: /education/i, level: 3 })).toBeInTheDocument();
    
    // Check for Certifications section
    expect(screen.getByRole('heading', { name: /certifications/i, level: 3 })).toBeInTheDocument();
  });

  test('career journey transitions are rendered', () => {
    render(<Background />);
    
    // Check that all career transitions are displayed
    backgroundData.careerJourney.transitions.forEach(transition => {
      expect(screen.getByText(transition)).toBeInTheDocument();
    });
  });

  test('all certifications are rendered', () => {
    render(<Background />);
    
    // Check that all certifications are displayed
    backgroundData.certifications.forEach(cert => {
      expect(screen.getByText(cert)).toBeInTheDocument();
    });
  });

  test('education cards render correctly', () => {
    render(<Background />);
    
    backgroundData.education.forEach(edu => {
      // Check institution name
      expect(screen.getByText(edu.institution)).toBeInTheDocument();
      
      // Check degree and field (combined in the component)
      const degreeText = `${edu.degree} in ${edu.field}`;
      expect(screen.getByText(degreeText)).toBeInTheDocument();
      
      // Check graduation year
      expect(screen.getByText(String(edu.graduationYear))).toBeInTheDocument();
      
      // Check location
      expect(screen.getByText(edu.location)).toBeInTheDocument();
      
      // Check achievements if they exist
      if (edu.achievements && edu.achievements.length > 0) {
        edu.achievements.forEach(achievement => {
          expect(screen.getByText(achievement)).toBeInTheDocument();
        });
      }
    });
  });

  test('education cards have proper semantic structure', () => {
    const { container } = render(<Background />);
    
    // Check that education cards are rendered as articles
    const educationCards = container.querySelectorAll('aside article');
    expect(educationCards.length).toBe(backgroundData.education.length);
    
    // Each card should have a header
    educationCards.forEach(card => {
      const header = card.querySelector('header');
      expect(header).toBeInTheDocument();
    });
  });

  test('sections have proper ARIA labels', () => {
    render(<Background />);
    
    // Check for ARIA labeled sections
    expect(screen.getByLabelText(/career transitions/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/achievements/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/professional certifications/i)).toBeInTheDocument();
  });
});
