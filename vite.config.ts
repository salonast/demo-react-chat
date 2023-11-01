import { defineConfig } from 'vite';

const port = process.env.PORT || 3006;

export default defineConfig({
  build: {
    outDir: 'build',
  },
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: 'VF_',
  server: {
    port,
  },
});
