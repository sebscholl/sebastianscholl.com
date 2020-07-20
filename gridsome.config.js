module.exports = {
  siteName: 'S. Scholl',
  siteDescription: "Sebastian Scholl's",
  siteUrl: 'https://sebscholl.github.io',
  pathPrefix: '/sebastianscholl.com',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
