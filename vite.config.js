import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   
// })

export default defineConfig({
  plugins: [react()],
  // ...
  server: {
    watch: {
      // Habilitar la opción de watch para los archivos de componentes
      include: './src/**/*.+(js|jsx|ts|tsx|json|html)',
    },
  },
});
