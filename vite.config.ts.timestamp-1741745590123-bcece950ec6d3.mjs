// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/gsm/Desktop/Nouveau%20dossier%20(4)/BANQUE-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/gsm/Desktop/Nouveau%20dossier%20(4)/BANQUE-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { tempo } from "file:///C:/Users/gsm/Desktop/Nouveau%20dossier%20(4)/BANQUE-main/node_modules/tempo-devtools/dist/vite/index.js";
var __vite_injected_original_dirname = "C:\\Users\\gsm\\Desktop\\Nouveau dossier (4)\\BANQUE-main";
var conditionalPlugins = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}
var vite_config_default = defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"]
  },
  plugins: [
    react({
      plugins: conditionalPlugins
    }),
    tempo()
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    // @ts-ignore
    allowedHosts: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnc21cXFxcRGVza3RvcFxcXFxOb3V2ZWF1IGRvc3NpZXIgKDQpXFxcXEJBTlFVRS1tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnc21cXFxcRGVza3RvcFxcXFxOb3V2ZWF1IGRvc3NpZXIgKDQpXFxcXEJBTlFVRS1tYWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9nc20vRGVza3RvcC9Ob3V2ZWF1JTIwZG9zc2llciUyMCg0KS9CQU5RVUUtbWFpbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCB7IHRlbXBvIH0gZnJvbSBcInRlbXBvLWRldnRvb2xzL2Rpc3Qvdml0ZVwiO1xuXG5jb25zdCBjb25kaXRpb25hbFBsdWdpbnM6IFtzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT5dW10gPSBbXTtcblxuLy8gQHRzLWlnbm9yZVxuaWYgKHByb2Nlc3MuZW52LlRFTVBPID09PSBcInRydWVcIikge1xuICBjb25kaXRpb25hbFBsdWdpbnMucHVzaChbXCJ0ZW1wby1kZXZ0b29scy9zd2NcIiwge31dKTtcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi9cIiA6IHByb2Nlc3MuZW52LlZJVEVfQkFTRV9QQVRIIHx8IFwiL1wiLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlbnRyaWVzOiBbXCJzcmMvbWFpbi50c3hcIiwgXCJzcmMvdGVtcG9ib29rLyoqLypcIl0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBwbHVnaW5zOiBjb25kaXRpb25hbFBsdWdpbnMsXG4gICAgfSksXG4gICAgdGVtcG8oKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhbGxvd2VkSG9zdHM6IHRydWUsXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VixPQUFPLFVBQVU7QUFDL1csU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsYUFBYTtBQUh0QixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLHFCQUFzRCxDQUFDO0FBRzdELElBQUksUUFBUSxJQUFJLFVBQVUsUUFBUTtBQUNoQyxxQkFBbUIsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNwRDtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sUUFBUSxJQUFJLGFBQWEsZ0JBQWdCLE1BQU0sUUFBUSxJQUFJLGtCQUFrQjtBQUFBLEVBQ25GLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxnQkFBZ0Isb0JBQW9CO0FBQUEsRUFDaEQ7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxrQkFBa0I7QUFBQSxJQUNsQixPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
