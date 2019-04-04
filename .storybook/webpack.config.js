const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['postcss-loader'],
    include: path.resolve(__dirname, '../')
  })

  return config
}
