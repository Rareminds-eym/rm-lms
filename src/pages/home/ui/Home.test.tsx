import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Home } from './Home';

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /Welcome to LMS/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('Your industrial-grade React template is ready.')).toBeInTheDocument();
  });
});
