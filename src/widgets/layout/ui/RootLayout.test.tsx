import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';

describe('RootLayout', () => {
  it('renders header, footer and outlet content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<div data-testid="outlet-content">Child Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('LMS Industrial Template')).toBeInTheDocument();
    expect(screen.getByTestId('outlet-content')).toBeInTheDocument();
    expect(screen.getByText(/LMS Engineering/i)).toBeInTheDocument();
  });
});
