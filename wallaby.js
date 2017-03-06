module.exports = function (wallaby) {
  return {
    files: [
      './colorconvert.js',
      {pattern: './expect.js', load: true, instrument: false}
    ],

    tests: [
      './colorconvert-spec.js'
    ],

    testFramework: 'mocha',

    env: {
      kind: 'electron'
    }

  }
}
