// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dondell's Portfolio",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Electrolize&display=swap',
        },
      ],
    },
  },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: ['~/assets/css/main.scss'],
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "~/assets/_colors.scss" as *;'
          }
        }
      }
    },
    runtimeConfig: {
        apiSecrete: '123',
        public: {
            apiBase: '/api'
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
