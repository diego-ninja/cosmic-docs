import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/home/diego/Projects/Personal/diego-ninja/cosmic-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
