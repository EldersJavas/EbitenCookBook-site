module.exports = {
  title: 'Ebiten CookBook',
  tagline: 'Ebiten从入门到退坑(不是',
  url: 'https://ebitencookbook.vercel.app/',
  baseUrl: '/',
  favicon: 'https://ebiten-zh.vercel.app/images/favicon.png',
  organizationName: 'EldersJavas', // Usually your GitHub org/user name.
  projectName: 'EbitenCookBook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ebiten CookBook',
      logo: {
        alt: 'Ebiten CookBook',
        src: 'https://ebiten-zh.vercel.app/images/favicon.png',
      },
      items: [
        {
          to: 'docs/CookBook_Start/class1',
          activeBasePath: 'CookBook_Starter',
          label: 'CookBook 入门指南',
          position: 'left',
        },
        {
          to: 'docs/CookBook_Start/class1',
          activeBasePath: 'CookBook_Adv',
          label: 'CookBook 进阶教程',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/EldersJavas/EbitenCookBook-site',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'CookBook',
              to: 'docs/CookBook_Start/class1',
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
        label: 'English (pls wait)',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      zh: {
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
