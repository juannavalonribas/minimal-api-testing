import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['html'],
    poolOptions: {
      forks: {
        // Allows to maximize speed
        // https://vitest.dev/config/#pooloptions-forks-singlefork
        singleFork: true,
      },
    },
  },
});
