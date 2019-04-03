const path = require("path")
const config = require('./config.json')

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        style: path.join(__dirname, "src/style"),
        utils: path.join(__dirname, "src/utils"),
        components: path.join(__dirname, "src/components")
      },
    },
  ]
}
