module.exports = function (wallaby) {
  return {
    files: [
      './colorconvert.js',
      {pattern: './node_modules/chai/chai.js', load: true, instrument: false}
    ],

    tests: [
      './colorconvert-spec.js'
    ],

    testFramework: 'mocha',

    env: {
      kind: 'electron'
    },

    setup: function () {
      window.expect = chai.expect
    }

  }
}
