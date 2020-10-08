var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
    directConnect: true,
    capabilities:
    {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['../tests/spec.js'],

    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
          reporter.beforeLaunch(resolve);
        });
      },
      // Close the report after all tests finish
      afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
          reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};