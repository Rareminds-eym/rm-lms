import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_API_URL: z.string().url().default('http://localhost:8080'),
    VITE_API_TIMEOUT: z.string().transform(Number).optional(),
    VITE_ENABLE_ANALYTICS: z
      .enum(['true', 'false'])
      .transform(v => v === 'true')
      .optional(),
    VITE_ENABLE_DEBUG: z
      .enum(['true', 'false'])
      .transform(v => v === 'true')
      .optional(),
    VITE_GOOGLE_ANALYTICS_ID: z.string().startsWith('G-').optional(),
    VITE_SENTRY_DSN: z.string().url().optional(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
