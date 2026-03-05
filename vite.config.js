import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
   base: "/-5-Componentes-con-Less-EQUIPD/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
