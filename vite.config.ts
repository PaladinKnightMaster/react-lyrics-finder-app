// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173,       // Default Vite port, can be changed if needed
    strictPort: true, // Fail if port is already in use
  },
});
