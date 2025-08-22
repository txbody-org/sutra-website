import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(command === "build"
      ? [
          prerender({
            staticDir: path.join(__dirname, "dist"),
            routes: ["/"],
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              headless: true,
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
  },
}));
