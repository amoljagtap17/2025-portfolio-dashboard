import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      app: "src/app",
      components: "src/components",
    },
  },
  server: {
    port: 4000,
    host: "localhost",
  },
  preview: {
    port: 4000,
    host: "localhost",
  },
});
