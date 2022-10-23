// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: 'mybotdoc',
  tagline: '#WeLoveThePurrs',
  url: 'https://bot.guyinga.top/resources',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'guyingd', // Usually your GitHub org/user name.
  projectName: 'mybotdoc', // Usually your repo name.
  titleDelimiter: ' 😺 ', // Defaults to `|`

  presets: require('./config/presets'),
  themeConfig: require('./config/theme'),
  plugins: require('./config/plugin'),
  
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
     },
}

module.exports = config