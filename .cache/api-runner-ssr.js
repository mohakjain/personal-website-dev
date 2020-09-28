var plugins = [{
      plugin: require('C:/Users/mohak/Desktop/mohakjain.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/mohak/Desktop/mohakjain.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/mohak/Desktop/mohakjain.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Mohak Jain","short_name":"Mohak Jain","start_url":"/","background_color":"#F8F5F5","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/simple-logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0c7981a4c2e4b9fe7623b45bd530bab3"},
    },{
      plugin: require('C:/Users/mohak/Desktop/mohakjain.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/mohak/Desktop/mohakjain.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/simple-logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0c7981a4c2e4b9fe7623b45bd530bab3"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
