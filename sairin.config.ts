// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: 'Lin'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Lin`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/home",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/home",
      },
    ],
  },
} as SairinConfig;
