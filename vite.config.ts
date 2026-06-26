import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['favicon.svg'],manifest:{name:'浮生问道',short_name:'问道',start_url:'./',display:'standalone',background_color:'#f4eddc',theme_color:'#315c55',icons:[{src:'pwa-192.svg',sizes:'192x192',type:'image/svg+xml'},{src:'pwa-512.svg',sizes:'512x512',type:'image/svg+xml'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,woff2}'],navigateFallback:'index.html'}})]});
