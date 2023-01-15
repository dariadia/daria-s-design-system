module.exports = {
  siteMetadata: {
    title: `Daria's Design System`,
    description: "Modular component library. Simple. Accessible."
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Spectral", "Karla"],
          urls: ["/assets/fonts/fonts.css"]
        }
      }
    },
    "gatsby-plugin-minify",
  ]
};
