const path = require('path');
const config = require('./config.json');

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: config.manifest,
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
      },
    },
  ],
};
