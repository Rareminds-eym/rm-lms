import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

const ThrowError = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  it('catches error and displays fallback UI', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong:/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Error/i)).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /Try again/i });
    expect(button).toBeInTheDocument();

    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      value: { reload: vi.fn() },
      configurable: true,
    });

    fireEvent.click(button);
    expect(window.location.reload).toHaveBeenCalled();

    Object.defineProperty(window, 'location', {
      value: originalLocation,
      configurable: true,
    });
    spy.mockRestore();
  });

  const ThrowString = () => {
    throw 'String Error';
  };

  it('handles non-Error exceptions gracefully', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowString />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong:/i)).toBeInTheDocument();
    expect(screen.getByText(/String Error/i)).toBeInTheDocument();
    spy.mockRestore();
  });
});
