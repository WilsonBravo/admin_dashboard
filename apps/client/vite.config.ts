import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/shared": path.resolve(__dirname, "../packages/shared"),
    },
  },
  server: {
    port: 4300,
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:4200",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
