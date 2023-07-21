// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../main'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    differentDomains: true,
    types: 'composition',
    locales: [
      {
        code: 'en-GB',
        file: 'en.json',
        domain: 'subcom.example.test:3000',
      },
      {
        code: 'de-DE',
        file: 'de.json',
        domain: 'subde.example.test:3000',
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
