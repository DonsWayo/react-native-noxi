module.exports = {
  title: 'React Native Noxi',
  tagline: 'A set of React Native components',
  url: 'https://donswayo.github.iom',
  baseUrl: '/react-native-noxi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'donswayo', // Usually your GitHub org/user name.
  projectName: 'react-native-noxi', // Usually your repo name.
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      defer: true,
    },
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'React Native Noxi',
      logo: {
        alt: 'React Native Noxi Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/DonsWayo/react-native-noxi',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/',
            },
            {
              label: 'Components',
              to: 'docs/avatar',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-native-noxi',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/react-native-noxi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/react-native-noxi',
            },
          ],
        },
        {
          title: 'More',
          items: [
/*             {
              label: 'Blog',
              to: 'blog',
            }, */
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/react-native-noxi',
            },
          ],
        },
      ],
      copyright: ` `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [require('@react-native-website/remark-snackplayer')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
