module.exports = {
  pluginOptions: {
    svgLoader: {
      svgo: {
        plugins: []
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/quiz-funnel-vue/dist/'
    : '/'
}
