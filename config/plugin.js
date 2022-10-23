/** @type {import('@docusaurus/types').PluginConfig} */
module.exports = [
  'docusaurus-plugin-sass',
  [
    '@docusaurus/plugin-content-blog',
    {
      id: 'welovethepurrs',
      routeBasePath: 'welovethepurrs',
      path: './welovethepurrs',
      blogTitle: '#WeLoveThePurrs (made by purrs)',
    },
  ],
  async function myPlugin(context, options) {
    return {
      name: 'docusaurus-tailwindcss',
      configurePostCss(postcssOptions) {
        // Appends TailwindCSS and AutoPrefixer.
        postcssOptions.plugins.push(require('tailwindcss'))
        postcssOptions.plugins.push(require('autoprefixer'))
        return postcssOptions
      },
    }
  },
]
