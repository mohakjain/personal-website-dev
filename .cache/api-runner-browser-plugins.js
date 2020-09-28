module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Mohak Jain","short_name":"Mohak Jain","start_url":"/","background_color":"#F8F5F5","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/simple-logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0c7981a4c2e4b9fe7623b45bd530bab3"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/simple-logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0c7981a4c2e4b9fe7623b45bd530bab3"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
