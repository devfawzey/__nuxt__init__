// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      // TODO add your title
      title: "nuxt",
      link: [
        {
          // TODO change this icon
          rel: "icon", href: "/favicon.ico", type: "image/svg+xml"
        }
      ]
    }
  },

  modules: [

    /**@important */
    "@nuxt/ui", /** @nuxtjs/icon + @nuxtjs/tailwindcss + @nuxtjs/color-mode */
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts"
    /**@optional */
  ],

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: '',
  },

  typescript: {
    // TODO optional
    // typeCheck: true,
    // strict:true
  },

  image: {
    // TODO uncheck in production
    // provider: "vercel"
  }

})
