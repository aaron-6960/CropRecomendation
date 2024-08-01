import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Set the base URL
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
