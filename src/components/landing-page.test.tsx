import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LandingPage from './landing-page';
import { socialLinks } from '../constants/social';

describe('Landing Page Component', () => {
  test('name is displayed', () => {
    render(<LandingPage />);
    
    // Check for the name heading
    expect(screen.getByRole('heading', { name: /connor hartland/i, level: 1 })).toBeInTheDocument();
  });

  test('title is displayed', () => {
    render(<LandingPage />);
    
    // Check for the title/role
    expect(screen.getByText(/devops engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/software developer/i)).toBeInTheDocument();
  });

  test('tagline is displayed', () => {
    render(<LandingPage />);
    
    // Check for the tagline
    expect(screen.getByText(/building scalable cloud infrastructure and full-stack applications/i)).toBeInTheDocument();
    expect(screen.getByText(/4\+ years of experience/i)).toBeInTheDocument();
  });

  test('social links render correctly', () => {
    render(<LandingPage />);
    
    // Check that all social links are present
    socialLinks.forEach((link) => {
      const linkElement = screen.getByLabelText(`Visit ${link.platform} profile`);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.url);
      
      // Check external links have proper attributes
      if (link.platform !== 'Email') {
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  test('social links navigation has proper ARIA label', () => {
    render(<LandingPage />);
    
    // Check for social media navigation
    expect(screen.getByLabelText(/social media links/i)).toBeInTheDocument();
  });

  test('CTA button is present', () => {
    render(<LandingPage />);
    
    // Check for the call-to-action button
    const ctaButton = screen.getByRole('button', { name: /view my projects/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveTextContent(/view my work/i);
  });

  test('profile image is displayed with proper alt text', () => {
    render(<LandingPage />);
    
    // Check for profile image
    const profileImage = screen.getByAltText(/connor hartland - devops engineer and software developer/i);
    expect(profileImage).toBeInTheDocument();
  });

  test('component has proper semantic structure', () => {
    const { container } = render(<LandingPage />);
    
    // Check that the component uses semantic header element
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    
    // Check that profile image is in a figure element
    const figure = container.querySelector('figure');
    expect(figure).toBeInTheDocument();
  });

  test('all social links have minimum touch target size', () => {
    const { container } = render(<LandingPage />);
    
    // Check that social links have minimum 44x44px touch targets
    const socialLinkElements = container.querySelectorAll('nav[aria-label="Social media links"] a');
    expect(socialLinkElements.length).toBe(socialLinks.length);
    
    socialLinkElements.forEach((link) => {
      expect(link).toHaveClass('min-w-[44px]');
      expect(link).toHaveClass('min-h-[44px]');
    });
  });

  test('CTA button has minimum touch target height', () => {
    render(<LandingPage />);
    
    const ctaButton = screen.getByRole('button', { name: /view my projects/i });
    expect(ctaButton).toHaveClass('min-h-[44px]');
  });
});
