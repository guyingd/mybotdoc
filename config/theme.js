/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
module.exports = {
  navbar: {
    // title: "PCC Archive",
    logo: {
      alt: 'å¤´å',
      src: 'http://q2.qlogo.cn/headimg_dl?dst_uin=2739218253&spec=100',
    },
     items: [
        { to: '/club', label: 'âŗī¸ Club', position: 'left' },
        {
          label: 'đē Collections',
          position: 'left',
          to: '/collections',
          items: [
            {
              label: 'đē Cats',
              to: '/collections/cats',
            },
            {
              label: 'đ Kittens',
              to: '/collections/kittens',
            },
            {
              label: 'đĩđģ Grandmas',
              to: '/collections/grandmas',
            },
            {
              label: 'đŠ Exclusives',
              to: '/collections/exclusives',
            },
            {
              label: 'đĒ KittyVault Purrks',
              to: '/collections/kittyvault-purrks',
            },
            {
              label: "đ Purrnelope's Gift",
              to: '/collections/gift',
            },
            {
              label: 'All Collections',
              to: '/collections',
            },
          ],
        },
        { to: '/ens', label: 'đ ENS', position: 'left' },
        { to: '/kittyvault', label: 'đĻ KittyVault', position: 'left' },
        { to: '/merch', label: 'đ Merch', position: 'left' },
       
      {
        label: 'đ° å¸å­',
        position: 'left',
        to: '/posts',
        items: [
          {
            label: 'đ æ¯å¨æ´æ°',
            to: '/posts/tags/weekly-update',
          },
          {
            label: 'đ Blog',
            to: '/posts/tags/QQ',
          },
          {
            label: 'đ æ˛šįŽĄ',
            to: '/posts/tags/purr-cast',
          },
          {
            label: 'đ§ č§Ŗé',
            to: '/posts/tags/explained',
          },
          {
            label: 'đ¨âđĢ å­Ļäš ',
            to: '/posts/tags/learn',
          },
          {
            label: 'đˇ æææ į­ž',
            to: '/posts/tags',
          },
          {
            label: 'đææå¸å­',
            to: '/posts',
          },
        ],
      },
      { to: '/welovethepurrs', label: 'đ Purrs', position: 'left' },
      {
        label: 'More',
        position: 'left',
        items: [
          {
            label: 'đŧ åĸé',
            to: '/club/team',
          },
          {
            label: 'đ¨ čēæ¯å',
            to: '/artwork',
          },  
          {
            label: 'đ° čĩæēåēä¸åéž',
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
            label: 'åŗäē',
            to: '/about',
          },
          {
            label: 'č´ĄįŽ',
            to: '/contribute',
          },
          {
            label: "MyBotDoc GitHub",
            href: 'https://github.com/guyingd/mybotdoc',
          },
        ],
      },
      {
        title: 'å­¤åŊąįįŊįĢ',
        items: [
          {
            label: 'ä¸Ēäēēä¸ģéĄĩ',
            href: 'https://home.guyinga.top//',
          },
          {
            label: 'ååŽĸ[åš´äšå¤ąäŋŽīŧæĨčŋæĨåē]',
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
            label: 'čĩæēåēä¸åéž',
            to: '/official-links',
          },
        ],
      },
      {
        title: 'æ´å¤',
        items: [
          {
            label: 'å¸å­å­æĄŖ',
            to: '/posts/archive',
          },
          {
            label: 'å¸å­æ į­ž',
            to: '/posts/tags',
          },            
        ],
        },
       {
        title: 'ææ¯æ ',
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
      // Algolia æäžįåēį¨ ID
      appId: '8463FRJ7IM',

      //  åŦåŧ API å¯éĨīŧæäē¤åŽæ˛ĄæåąéŠ
      apiKey: 'cffc54a8e4cee6bf2f02a32cb6737711',

      indexName: '8463FRJ7IM',

      // å¯éīŧč§ä¸æ
      contextualSearch: true,

      // å¯éīŧåŖ°æåĒäēååéčĻį¨ window.location åįå¯ŧčĒčä¸æ¯ history.pushã éį¨äē Algolia éįŊŽäŧįŦåå¤ä¸ĒææĄŖįĢįšīŧčæäģŦæŗčĻį¨ window.location.href å¨åŽäģŦäšé´čˇŗčŊŦæļã
      externalUrlRegex: 'external\\.com|domain\\.com',

      // å¯éīŧAlgolia æį´ĸåæ°
      searchParameters: {},

      // å¯éīŧæį´ĸéĄĩéĸįčˇ¯åžīŧéģčŽ¤å¯į¨īŧå¯äģĨį¨ `false` įĻį¨īŧ
      searchPagePath: 'search',

      // âĻâĻåļäģ Algolia åæ°
    },     
}
