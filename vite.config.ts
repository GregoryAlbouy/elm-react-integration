import reactPlugin from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { plugin as elmPlugin } from "vite-plugin-elm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [elmPlugin(), reactPlugin()],
});
