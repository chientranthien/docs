// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Chien Tran\'s Site',
  tagline: 'Software Engineer',
  favicon: 'img/golden.png',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chientranthien/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chientranthien/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      mermaid: {
      theme: {light: 'base', dark: 'forest'},
    },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chien\'s site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/golden.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'goldenPay',
            position: 'left',
            label: 'GoldenPay'
          },
          {to: '/blog', label: 'My Learning', position: 'left'},
          {
            href: 'https://github.com/chientranthien/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'GoldenPay',
                to: '/docs/golden_pay/intro',
              },
              {
                label: 'My Learning',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chientranthien',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/chien-tran-thien-529360137/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/EYFKbvEt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tran Thien Chien. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;