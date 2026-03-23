import { describe, it, expect } from 'vitest';
import { env } from './env';

describe('Environment Validator', () => {
  it('parses environment successfully or applies defaults', () => {
    expect(env).toBeDefined();
    expect(env.VITE_API_URL).toBeDefined();
  });
});
