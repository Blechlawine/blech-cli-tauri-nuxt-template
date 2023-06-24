// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@vueuse/nuxt", "@unocss/nuxt"],
    experimental: {},
    ssr: false,
    css: ["@unocss/reset/tailwind.css"],
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.ts",
    },
    vite: {
        clearScreen: false,
        envPrefix: ["VITE_", "TAURI_"],
    },
});
