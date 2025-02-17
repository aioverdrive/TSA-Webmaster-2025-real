
import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        catering: resolve(__dirname, 'pages/catering.html'),
        menu: resolve(__dirname, 'pages/menu.html'),
        impact: resolve(__dirname, 'pages/our-impact.html'),
        methods: resolve(__dirname, 'pages/our-methods.html'),
        credits: resolve(__dirname, 'pages/credits.html')
      }
    }
  }
}