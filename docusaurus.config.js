// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

console.log("process.env.", process.env);
// 判斷當前環境是否是 vercel 還是 github pages
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "美容百科前端文件2",
  tagline:
    "本文件提供美容百科網站的入門指南，包括註冊、瀏覽文章和使用搜尋功能的基本步驟，與各類操作說明、注意事項",
  favicon: "img/favicon.ico",

  // 設定 github page 相關 start
  url: isVercel
    ? "https://kingly-beauty-wiki-frontend-doc-gyrm.vercel.app/"
    : "https://kingly_beauty_wiki_frontend_doc.github.io",
  baseUrl: isGitHubPages ? "/kingly_beauty_wiki_frontend_doc/" : "/",

  organizationName: "kingly_beauty_wiki",
  projectName: "kingly_beauty_wiki_frontend_doc",
  // 設定 github page 相關 end

  onBrokenLinks: "throw", // 'ignore' 允許建構失敗仍繼續，或者 'log' 來記錄錯誤但不阻止構建
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hant", // "en"
    locales: ["zh-Hant"],
    localeConfigs: {
      "zh-Hant": {
        label: "繁體中文",
        direction: "ltr",
        htmlLang: "zh-Hant",
      },
    },
  },

  stylesheets: [
    {
      href: "./src/css/custom.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "美容百科前端文件",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "使用指南",
          },
          {
            href: "https://github.com/ben0588/kingly_beauty_wiki_frontend_doc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "關於我們",
            items: [
              {
                label: "美容百科網站",
                href: "https://beauty.kinglyrobot.com/",
              },
            ],
          },
          {
            title: "使用指南",
            items: [
              {
                label: "如何使用",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark", // 預設主題模式 (light or dark)
        disableSwitch: false, // 是否禁用切換按鈕
        respectPrefersColorScheme: true, // 根據瀏覽器設定自動切換主題
      },
    }),
};

export default config;
