import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePrettier from "vite-plugin-prettier";
import viteEslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    vitePrettier(),
    viteEslint({
      fix: true,
      include: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx", "src/**/*.tsx"],
    }),
  ],
});
