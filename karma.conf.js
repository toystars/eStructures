// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'src/list.js',
      'src/linkedlist.js',
      'src/list-test.jss',
      'tests/linkedlist-test.js'
    ]
  });
};