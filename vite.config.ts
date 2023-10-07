import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const srcPath = path.resolve(__dirname, './src/');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ['index.html'],
    },
    minify: true,
  },
  resolve: {
    alias: {
      app: path.resolve(srcPath, './app'),
      store: path.resolve(srcPath, './store'),
      hooks: path.resolve(srcPath, './hooks'),
      utils: path.resolve(srcPath, './utils'),
      config: path.resolve(srcPath, './config'),
      styles: path.resolve(srcPath, './styles'),
      Router: path.resolve(srcPath, './Router'),
      assets: path.resolve(srcPath, './assets'),
      components: path.resolve(srcPath, './components'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
