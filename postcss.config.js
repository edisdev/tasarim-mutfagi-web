module.exports = {
  parser: 'postcss-comment',
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-for': {},
    'postcss-extend': {},
    'postcss-custom-media': {
      importFrom: [
        'src/styles/viewport.css'
      ]
    }
  }
}
