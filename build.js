import { build } from 'vite';
import react from '@vitejs/plugin-react';

build({
  configFile: false,
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
}).then(() => {
  console.log('Build succeeded!');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
