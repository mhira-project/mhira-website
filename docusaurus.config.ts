import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MHIRA',
  tagline: 'Mental Health Information Reporting Assistant',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.mhira.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mhira-project', // Usually your GitHub org/user name.
  projectName: 'mhira-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

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
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mhira-project/documentation/edit/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mhira-project/documentation/edit/main/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/mhira_logo.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Mhira Logo',
        src: 'img/mhira_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Publications', position: 'left'},
        {
          href: 'https://q-box.mhira.app',
          label: 'Get questionnaires',
          position: 'right',
        },
        {
          href: 'https://github.com/mhira-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MHIRA',
          items: [
            {
              label: 'Partners and Team',
              href: 'https://mhira-project.org/',
            },
          ],
        },
        {
          title: 'Social media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/projectmhira',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/projectMHIRA',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mhira-project',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC8vS43V6Nvtdk1wbDksnx1w',
            },
          ],
        },
      ],
      copyright: `MHIRA is available under the Mozilla Public License, version 2.0`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
