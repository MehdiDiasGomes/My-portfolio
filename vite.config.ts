import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Port sur lequel le serveur sera lancé
    open: true, // Ouvrir le navigateur automatiquement
  },
  build: {
    outDir: 'dist', // Dossier de sortie pour les fichiers construits
  },
  resolve: {
    alias: {
      '@': '/src', // Alias pour simplifier les chemins d'importation
    },
  },
})
