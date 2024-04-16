// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lei\'s blog and personal knowledge collections',
  tagline: '业精于勤荒于嬉，行成于思毁于随',
  url: 'https://lei-s-blog.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lei0lei', // Usually your GitHub org/user name.
  projectName: 'lei\'s blog', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python',
        path: 'python',
        routeBasePath: 'python',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cpp',
        path: 'cpp',
        routeBasePath: 'cpp',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rust',
        path: 'rust',
        routeBasePath: 'rust',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'golang',
        path: 'golang',
        routeBasePath: 'golang',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algos',
        path: 'algos',
        routeBasePath: 'algos',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'ai',
        routeBasePath: 'ai',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'paper',
        path: 'paper',
        routeBasePath: 'paper',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'project',
        path: 'project',
        routeBasePath: 'project',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  themeConfig:
    {
      navbar: {
        title: 'Lei\'s blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'python',
            label: 'python',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'cpp',
            label: 'cpp',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'rust',
            label: 'rust',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'golang',
            label: 'golang',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'algos',
            label: 'algos',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'ai',
            label: 'ai',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorialSidebar',
            docsPluginId: 'project',
            label: 'project',
          },
          {to: '/blog', label: 'paper', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
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
            ],
          },
          {
            title: 'Community',
            items: [
              
            ],
          },
          {
            title: 'More',
            items: [
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
