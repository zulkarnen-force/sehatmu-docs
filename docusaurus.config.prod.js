// @ts-check
// Development/Staging configuration for SehatMu Documentation

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SehatMu API Documentation",
  tagline: "SehatMu Environment - untuk kesehatan Muhammadiyah",
  url: "https://docs.sehat.muhammadiyah.or.id/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "muhammadiyah",
  projectName: "sehatmu-docs-staging",

  // Environment-specific customFields
  customFields: {
    environment: "production",
    apiBaseUrl: "https://sehat.muhammadiyah.or.id/api",
    consoleUrl: "https://sehat.muhammadiyah.or.id/console",
    supportEmail: "support@sehat.muhammadiyah.or.id",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://git.muhammadiyah.or.id/sehatmu/docs/tree/develop/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://git.muhammadiyah.or.id/sehatmu/docs/tree/develop/",
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
          href: "https://docs.sehat.muhammadiyah.or.id/",
        },
        items: [
          {
            type: "doc",
            docId: "selamat-datang",
            position: "left",
            label: "Documentation",
          },
          {
            label: "Dev Console",
            position: "left",
            href: "https://sehat.muhammadiyah.or.id/console",
          },
          {
            label: "Sandbox",
            position: "left",
            to: "/docs/sandbox",
          },
          {
            type: "html",
            position: "right",
            value:
              '<span class="navbar__item navbar__link" style="color: #ffc107;">Staging</span>',
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
          {
            title: "Documentation",
            items: [
              {
                label: "Getting Started",
                to: "/docs/selamat-datang",
              },
              {
                label: "API Reference",
                to: "/docs/catalog-rest-api",
              },
            ],
          },
          {
            title: "Developer Tools",
            items: [
              {
                label: "Console",
                href: "https://sehat.muhammadiyah.or.id/console",
              },
              {
                label: "API Sandbox",
                to: "/docs/sandbox",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Dev Support",
                href: "mailto:dev-support@sehat.muhammadiyah.or.id",
              },
              {
                label: "GitMu",
                href: "https://git.muhammadiyah.or.id/",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://muhammadiyah.or.id" target="_blank">Persyarikatan Muhammadiyah</a> - Development Environment`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "bash", "json"],
      },
      announcementBar: {
        id: "prod_environment",
        content: "SehatMu API Documentation - Production Environment",
        backgroundColor: "#28a745",
        textColor: "#fff",
        isCloseable: true,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          sehatmu: {
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
