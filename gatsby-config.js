module.exports = {
  siteMetadata: {
    title: `Danni's Web Ui Kit`
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
