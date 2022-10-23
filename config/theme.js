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
        label: '📰 帖子',
        position: 'left',
        to: '/posts',
        items: [
          {
            label: '📅 每周更新',
            to: '/posts/tags/weekly-update',
          },
          {
            label: '📔 Blog',
            to: '/posts/tags/QQ',
          },
          {
            label: '🎙 油管',
            to: '/posts/tags/purr-cast',
          },
          {
            label: '🧐 解释',
            to: '/posts/tags/explained',
          },
          {
            label: '👨‍🏫 学习',
            to: '/posts/tags/learn',
          },
          {
            label: '🏷 所有标签',
            to: '/posts/tags',
          },
          {
            label: '🎁所有帖子',
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
            label: '😼 团队',
            to: '/club/team',
          },
          {
            label: '🎨 艺术品',
            to: '/artwork',
          },  
          {
            label: '🛰 资源库与友链',
            to: '/resources',
          },
        ],
      },
    ],
  },
  footer: {
    links: [
      {
        title: 'MyBotDoc',
        items: [
          {
            label: '关于',
            to: '/about',
          },
          {
            label: '贡献',
            to: '/contribute',
          },
          {
            label: "MyBotDoc GitHub",
            href: 'https://github.com/guyingd/mybotdoc',
          },
        ],
      },
      {
        title: '孤影的网站',
        items: [
          {
            label: '个人主页',
            href: 'https://home.guyinga.top//',
          },
          {
            label: '博客[年久失修，接近报废]',
            href: 'https://blog-azure-ten-63.vercel.app/',
          },
          {
            label: 'API',
            href: 'https://g.guyinga.top/',
          },
          {
            label: 'Sedocs',
            href: 'https://docs.guyinga.top//',
          },
          {
            label: '资源库与友链',
            to: '/official-links',
          },
        ],
      },
      {
        title: '更多',
        items: [
          {
            label: '帖子存档',
            to: '/posts/archive',
          },
          {
            label: '帖子标签',
            to: '/posts/tags',
          },            
        ],
        },
       {
        title: '技术栈',
        items: [
          {
                label: "React",
                href: "https://react.docschina.org/",
              },
              {
                label: "Vue.js",
                href: "https://react.docschina.org/",
              },
              {
                label: "Python",
                href: "https://www.w3school.com.cn/python/index.asp",
              },
              {
                label: "Java",
                href: "https://zq99299.github.io/java-tutorial/",
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/buildwith.png"/><a/>
                
                `,
              },
             {
                html: `<a href="https://www.netlify.com/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/netlify.png"/><a/>
                
                `,
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
