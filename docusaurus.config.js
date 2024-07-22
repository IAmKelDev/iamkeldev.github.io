// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDI',
  tagline: '',
  favicon: 'img/opendi-icon-small.png',

  // Set the production url of your site here
  url: 'https://IAmKelDev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/landing-site-ds/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IAmKelDev', // Usually your GitHub org/user name.
  projectName: 'landing-site-ds', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/IAmKelDev/landing-site-ds/tree/dev/',
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenDI',
        logo: {
          alt: 'OpenDI Logo',
          src: 'img/opendi-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'landingSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/DMxP338jXy',
            label: 'OpenDI Discord',
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
                label: 'Home',
                to: '/',
              },
              {
                label: 'Roles and User Stories',
                href: 'http://roles-user-stories.opendi.org'
              },
              {
                label: 'JSON Schema',
                href: 'http://json-schema.opendi.org'
              },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'OpenDI Discord',
                href: 'https://discord.gg/FtAX3JStJz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opendi-org',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
