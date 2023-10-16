// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SehatMu",
  tagline: "SehatMu, untuk kesehatan Muhammadiyah",
  url: "http://103.19.182.20",
  baseUrl: "/sehatmu/developer",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/sehat-mu.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "SehatMu Logo",
          src: "img/sehat-mu.png",
        },
        items: [
          {
            type: "doc",
            docId: "selamat-datang",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Sandbox",
            position: "left",
            to: "/docs/sandbox",
          },
          {
            href: "http://git.muhammadiyah.or.id/",
            label: "GitLab",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Community",
          //   items: [
          // {
          //   label: "Stack Overflow",
          //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
          // },
          // {
          //   label: "Discord",
          //   href: "https://discordapp.com/invite/docusaurus",
          // },
          // {
          //   label: "Twitter",
          //   href: "https://twitter.com/docusaurus",
          // },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          // {
          //   label: "Blog",
          //   to: "/blog",
          // },
          // {
          //   label: "GitLab",
          //   href: "http://git.muhammadiyah.or.id",
          // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  <a href="https://muhammadiyah.or.id" target="_blank">Persyarikatan Muhammadiyah</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          onehealth: {
            specPath: "examples/labmu.json",
            outputDir: "docs/sandbox",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
