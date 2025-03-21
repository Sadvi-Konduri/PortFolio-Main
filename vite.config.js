import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ Import React plugin

export default defineConfig({
  plugins: [react()], // ✅ Use React plugin
  base: "/",
  server: {
    host: "0.0.0.0", // Allows Render to detect the port
    port: 10000, // Render expects a port, but it's ignored for static sites
  },
});
