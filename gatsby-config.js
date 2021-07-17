module.exports = {
  siteMetadata: {
    title: `Danni's Web Ui Kit`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Kazimir", "Graphik"],
          urls: ["/public/fonts/fonts.css"]
        }
      }
    }
  ]
};
