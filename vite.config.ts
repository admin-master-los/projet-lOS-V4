import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ⚡ Optimisations de performance
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      '@supabase/supabase-js',
    ],
  },
  
  // ⚡ Optimisations du serveur de dev
  server: {
    fs: {
      // Limite la recherche de fichiers
      strict: true,
    },
    // Cache plus agressif
    hmr: {
      overlay: true,
    },
  },
  
  // ⚡ Optimisations du build
  build: {
    // Code splitting pour réduire la taille
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'tanstack': ['@tanstack/react-query'],
          'supabase': ['@supabase/supabase-js'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Limite les warnings sur la taille
    chunkSizeWarningLimit: 1000,
  },
});
