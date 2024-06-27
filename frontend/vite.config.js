import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": process.env.REACT_APP_BACKEND_URL ,
      "/uploads/": process.env.REACT_APP_BACKEND_URL,
    },
  },
});


// "/api/": "http://127:5000",
//       "/uploads/": "http://localhost:5000",