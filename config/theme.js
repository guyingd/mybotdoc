/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
module.exports = {
  navbar: {
    // title: "PCC Archive",
    logo: {
      alt: '头像',
      src: 'http://q2.qlogo.cn/headimg_dl?dst_uin=2739218253&spec=100',
    },
    items: [
      { to: '/club', label: '⛳️ Club', position: 'left' },
      {
        label: '😺 Collections',
        position: 'left',
        to: '/collections',
        items: [
          {
            label: '😺 Cats',
            to: '/collections/cats',
          },
          {
            label: '🐈 Kittens',
            to: '/collections/kittens',
          },
          {
            label: '👵🏻 Grandmas',
            to: '/collections/grandmas',
          },
          {
            label: '🛩 Exclusives',
            to: '/collections/exclusives',
          },
          {
            label: '🪂 KittyVault Purrks',
            to: '/collections/kittyvault-purrks',
          },
          {
            label: "🎁 Purrnelope's Gift",
            to: '/collections/gift',
          },
          {
            label: 'All Collections',
            to: '/collections',
          },
        ],
      },
      { to: '/ens', label: '🆔 ENS', position: 'left' },
      { to: '/kittyvault', label: '🏦 KittyVault', position: 'left' },
      { to: '/merch', label: '👕 Merch', position: 'left' },
      {
        label: '📰 博客',
        position: 'left',
        to: '/posts',
        items: [
          {
            label: '📅 每周更新',
            to: '/posts/tags/weekly-update',
          },
          {
            label: '📔 Team Blog',
            to: '/posts/tags/blog',
          },
          {
            label: '🎙 PurrCast',
            to: '/posts/tags/purr-cast',
          },
          {
            label: '💬 Interview',
            to: '/posts/tags/interview',
          },
          {
            label: '🧐 Explained',
            to: '/posts/tags/explained',
          },
          {
            label: '👨‍🏫 Learn',
            to: '/posts/tags/learn',
          },
          {
            label: '🏷 All Tags',
            to: '/posts/tags',
          },
          {
            label: 'All Posts',
            to: '/posts',
          },
        ],
      },
      { to: '/welovethepurrs', label: '💜 Purrs', position: 'left' },
      {
        label: 'More',
        position: 'left',
        items: [
          {
            label: '😼 PCC Team',
            to: '/club/team',
          },
          {
            label: '🔗 PCC Official Links',
            to: '/official-links',
          },
          {
            label: '🎨 Artwork',
            to: '/artwork',
          },
          {
            label: '🛠 Contracts & EOA Addresses',
            to: '/addresses',
          },
          {
            label: '🛰 Resources',
            to: '/resources',
          },
        ],
      },
    ],
  },
  footer: {
    links: [
      {
        title: 'PCC-Archive.org',
        items: [
          {
            label: 'About PCC Archive',
            to: '/about',
          },
          {
            label: 'Contribute',
            to: '/contribute',
          },
          {
            label: "botdoc GitHub",
            href: 'https://github.com/guyingd/mybotdoc',
          },
        ],
      },
      {
        title: 'PCC Official',
        items: [
          {
            label: 'Website',
            href: 'https://www.purrnelopescountryclub.com/',
          },
          {
            label: 'Discord',
            href: 'http://discord.gg/purrnelopescountryclub',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/PurrnelopesCC',
          },
          {
            label: 'Official Links',
            to: '/official-links',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Posts Archive',
            to: '/posts/archive',
          },
          {
            label: 'Posts Tags',
            to: '/posts/tags',
          },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} pcc-archive.org`,
  },
  image: 'img/pcc-archive-soc.jpg',
  metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  announcementBar: require('./announcementBar'),
  metadata: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  docs: {
    sidebar: {
      hideable: true,
    },
  },
    // ...
    algolia: {
      // Algolia 提供的应用 ID
      appId: '8463FRJ7IM',

      //  公开 API 密钥：提交它没有危险
      apiKey: 'cffc54a8e4cee6bf2f02a32cb6737711',

      indexName: '8463FRJ7IM',

      // 可选：见下文
      contextualSearch: true,

      // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      externalUrlRegex: 'external\\.com|domain\\.com',

      // 可选：Algolia 搜索参数
      searchParameters: {},

      // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
      searchPagePath: 'search',

      // ……其他 Algolia 参数
    },     
}
