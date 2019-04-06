module.exports = {
  parser: 'postcss-comment',
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-for': {},
    'postcss-custom-media': {
      importFrom: [
        'src/style/viewport.css'
      ]
    }
  }
}
