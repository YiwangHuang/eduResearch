import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { markdownAnyblockPlugin } from 'vuepress-plugin-markdown-anyblock'
import { injectCSSPlugin } from 'inject-css'
import  mdItObsidianCallouts  from 'markdown-it-obsidian-callouts'
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "VuePress 博客",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  extendsMarkdown: (md) => {
    md.use(mdItObsidianCallouts) // 添加插件用于解析渲染obsidian的callout
  },
  plugins: [
    markdownAnyblockPlugin(),
    injectCSSPlugin()
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
