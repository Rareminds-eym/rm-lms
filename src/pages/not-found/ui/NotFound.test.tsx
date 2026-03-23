import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from './NotFound';

describe('NotFound Page', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { name: /404 - Not Found/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go Home/i })).toBeInTheDocument();
  });
});
