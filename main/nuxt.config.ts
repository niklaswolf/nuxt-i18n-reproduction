// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  i18n: {
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    differentDomains: true,
    types: 'composition',
    locales: [
      {
        code: 'en-GB',
        file: 'en.json',
        domain: 'com.example.test:3000',
      },
      {
        code: 'de-DE',
        file: 'de.json',
        domain: 'de.example.test:3000',
      },
    ],
    lazy: false,
    langDir: '../global/lang',
    defaultLocale: 'en-GB',
    compilation: {
      strictMessage: false,
    },
  },
})
