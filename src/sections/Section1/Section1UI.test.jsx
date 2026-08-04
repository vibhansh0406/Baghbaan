import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Section1UI from './Section1UI';

describe('Section1UI Component', () => {
  let playMock;

  beforeEach(() => {
    // Mock the global console.log to avoid cluttering test output when testing rejected promises
    vi.spyOn(console, 'log').mockImplementation(() => {});

    // Mock HTMLMediaElement.prototype.play
    playMock = vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the main component structure correctly', () => {
    render(<Section1UI />);

    // Check if the logo is rendered
    const logo = screen.getByAltText('Bagh Baan Logo');
    expect(logo).toBeInTheDocument();

    // Check if main heading parts exist (using getByText with text matchers because of the span)
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && content.includes('Bagh');
    })).toBeInTheDocument();

    // Check if the subtitle is rendered
    expect(screen.getByText(/Restaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/100% Pure Veg • Highway Fine Dining/i)).toBeInTheDocument();
  });

  it('attempts to autoplay the video on mount', () => {
    render(<Section1UI />);

    // Check if the play method was called on the video element
    expect(playMock).toHaveBeenCalledTimes(1);
  });

  it('handles autoplay promise rejection gracefully', async () => {
    // Mock play to return a rejected promise simulating autoplay policy block
    const error = new Error('Autoplay prevented');
    playMock.mockImplementation(() => Promise.reject(error));

    render(<Section1UI />);

    // Allow promises to resolve
    await Promise.resolve();

    expect(playMock).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Autoplay prevented or video failed to load:", error);
  });
});
