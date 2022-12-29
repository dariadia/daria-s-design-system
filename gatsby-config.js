module.exports = {
  siteMetadata: {
    title: `Daria's Web UI Kit`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Spectral", "Karla"],
          urls: ["/public/fonts/fonts.css"]
        }
      }
    }
  ]
};
