module.exports = {
  env: {
    mocha: true
  },
  globals: {
    def: false,
    get: false,
    expect: false,
  },
  rules: {
    "prefer-arrow-callback": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  }
}
