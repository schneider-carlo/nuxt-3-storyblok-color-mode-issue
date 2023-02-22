// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@storyblok/nuxt", "@nuxtjs/color-mode"],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "",
  },
});
