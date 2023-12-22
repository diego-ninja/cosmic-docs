import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  [
    {
      text: "Development",
      icon: "home",
      prefix: "dev/",
      children: "structure",
    }
  ]
);
