module.exports = {
  title: 'Ebiten CookBook',
  tagline: 'Ebiten从入门到退坑(不是',
  url: 'https://ebitencookbook.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'EbitenPot', // Usually your GitHub org/user name.
  projectName: 'EbitenCookBook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ebiten CookBook',
      logo: {
        alt: 'Ebiten CookBook',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/EldersJavas/EbitenCookBook-site',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'EbitenPot GitHub',
              href: 'https://github.com/EbitenPot',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/y3UbyKKKWW',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Resources (GitHub)',
              href: 'https://github.com/EldersJavas/EbitenCookBook-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EbitenPot`,
    },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      fr: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
    },
  },
  baseUrlIssueBanner: true,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
