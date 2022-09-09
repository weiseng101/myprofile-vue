const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
      process.env.NODE_ENV === "production" ? "/" : "/",

  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#42DB87',
            'link-color': '#42DB87',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
})
