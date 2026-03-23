import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AppRouter } from './Router';

describe('AppRouter', () => {
  it('renders correctly on default path', () => {
    render(<AppRouter />);
    expect(screen.getByText('LMS Industrial Template')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to LMS/i)).toBeInTheDocument();
  });
});
