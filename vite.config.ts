import { defineConfig } from 'vite'
import reactRouterPlugin from 'vite-plugin-next-react-router';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //...
    reactRouterPlugin(),
  ],
})
