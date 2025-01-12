import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: "./nginx.key",
      cert: "./nginx.crt",
    },
    host: "localhost",
    port: 5173,
  },
});
