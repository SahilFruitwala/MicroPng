import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  // Expose the existing Next-style public env vars to the client.
  envPrefix: ["NEXT_PUBLIC_", "VITE_PUBLIC_"],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/ingest": {
        target: "https://us.i.posthog.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ingest/, ""),
        secure: false,
      },
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),

    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      router: {
        routesDirectory: "app",
        routeFileIgnorePattern:
          "(^|/)(HomeClient|PostHogClient|NotFoundComponent|.*Client)\\.tsx$",
      },
    }),
    viteReact(),
  ],
});
