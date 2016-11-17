module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  env: {
    browser: true
  },
  plugins: [
    'react'
  ]
}
