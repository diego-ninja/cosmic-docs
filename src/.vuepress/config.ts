import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Cosmic PHP - Documentation",
  description: "The documentation for Cosmic PHP Framework",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
