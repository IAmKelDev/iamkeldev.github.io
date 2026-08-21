import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'KelDev',
  tagline: 'Yet Another Personal/Professional Site (Isaac K)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://keldev.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IAmKelDev', // Usually your GitHub org/user name.
  projectName: 'KelDev Site', // Usually your repo name.

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
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  customFields: {
    forbiddenGiscusBlogPaths: [],
  },

  themeConfig: {
    image: "img/logoVector_Green_Round_120x120.png",
    navbar: {
      title: 'Isaac K',
      logo: {
        alt: 'KelDev Logo',
        src: 'img/logoVector_Green_Round.svg',
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'about',
          sidebarId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          to: '/about/projects',
          label: 'Projects',
          position: 'left'
        },
        {
          to: '/gallery',
          label: 'Gallery',
          position: 'left'
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/thoughts',
          label: 'Thoughts',
          position: 'left'
        },
        {
          href: 'https://github.com/IAmKelDev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Email',
          href: 'mailto:keldtdev@gmail.com',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/isaac-kellogg/'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/IAmKelDev'
        }
      ],
      logo: {
        alt: 'KelDev Logo',
        src: 'img/logoVector_Green_Round.svg',
        width: 80,
        height: 80
      },
      copyright: `Copyright © ${new Date().getFullYear()} S. Isaac Kellogg`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#ex-config
        id: 'blog',
        blogDescription: 'Technical posts about software development. Thoughts about media. For looser, more frequent posts check my Thoughts page.',
        routeBasePath: 'blog',
        path: './blog',
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) => 
          frontMatter.hide_reading_time
            ? undefined
            : defaultReadingTime({ content }),
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'thoughts',
        blogTitle: 'Thoughts',
        blogDescription: 'Lower-effort, higher-frequency bloggy posts, about a wider variety of topics. For higher-effort posts, see my actual Blog.',
        routeBasePath: 'thoughts',
        blogSidebarCount: 0,
        postsPerPage: 50,
        path: './thoughts',
        showReadingTime: false,
        onUntruncatedBlogPosts: 'ignore',
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        }
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./about/sidebars.about.ts')
      }
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'gallery',
        path: 'gallery',
        routeBasePath: 'gallery',
      }
    ]
  ]
};

export default config;
