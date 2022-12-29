module.exports = {
  siteMetadata: {
    title: `Daria's Design System`
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
