// https://nuxt.com/docs/api/configuration/nuxt-config
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/elementPlus.scss"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  generate: {
    nojekyll: true, //not working on this version
    fallback: "404.html",
  },
  ssr: true, //When false
  target: "static", // and static, nuxt generates a SPA
  app: {
    baseURL: "/HomePage-Nuxt/",
  },
});
