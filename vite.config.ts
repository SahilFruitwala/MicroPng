import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Expose the existing Next-style public env vars to the client.
  envPrefix: ['NEXT_PUBLIC_'],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: 'src',
      router: {
        routesDirectory: 'app',
        routeFileIgnorePattern:
          '(^|/)(HomeClient|PostHogClient|NotFoundComponent|.*Client)\\.tsx$',
      },
    }),
    viteReact(),
  ],
})
