import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

// This is only used for import alias, not required.
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
