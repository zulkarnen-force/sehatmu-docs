// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SehatMu",
  tagline: "SehatMu, untuk kesehatan Muhammadiyah",
  url: "https://sehat.muhammadiyah.or.id",
  baseUrl: "/guide",
  // url: "https://jerusalem-dev.muhammadiyah.or.id",
  // baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
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
          src: "img/logo.png",
          href: "https://sehat.muhammadiyah.or.id",
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
            href: "https://git.muhammadiyah.or.id/",
            label: "GitMu",
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
        copyright: `© ${new Date().getFullYear()}  <a href="https://muhammadiyah.or.id" target="_blank">Persyarikatan Muhammadiyah</a>`,
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
            specPath: "examples/openapi/sehatmu.stable.openapi.yaml",
            outputDir: "docs/sandbox",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          candidate: {
            specPath: "examples/openapi/sehatmu.candidate.openapi.yaml",
            outputDir: "docs/sandbox/ongoing",
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
