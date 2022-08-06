
             exports.config = {
            framework: 'jasmine',
            seleniumAddress: 'http://localhost:4444/wd/hub',
            specs: ['spec.js'],
            multiCapabilities: [
            {
                "browserName":"chrome",
                "shardTestFiles":true,
                "chromeOptions":{
                    "args":["--disable-gpu","-disable-dev-shm-usage","--no-sandbox","-disable-popup-blocking","--start-maximized","--disable-web-security","--allow-running-insecure-content","--disable-infobars"]
                }
            }
        ],
        useAllAngular2AppRoots: true,
      onPrepare: function(){
	//Getting XML report    
			var jasmineReporters = require('jasmine-reporters');
			jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			   consolidateAll: true,
			   filePrefix: 'guitest-xmloutput',
			   savePath: 'vbnet'
			}));
	//allure report
			var AllureReporter = require('jasmine-allure-reporter');
			jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir:  'vbnet\\allure_reports'
			}));
			jasmine.getEnv().afterEach(function(done){
			  browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot1', function () {
				  return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			  })
			});
	//Getting screenshots  
		var fs = require('fs-extra');
		fs.emptyDir(`vbnet\\screenshots`, function (err) {
				 console.log(err);
			 });
			 jasmine.getEnv().addReporter({
				 specDone: function(result) {
					 if (result.status == 'failed') {
                         browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream(`vbnet\\screenshots\\`+ result.fullName+ '.png');
                        stream.write(new Buffer.from(png, 'base64'));
                             stream.end();
                         });
					 }
				 }
			 });
			 },
		 onComplete: function() {
			 //Getting HTML reportvar browserName, browserVersion;
				var browserName = "chrome";
				var platform = "iTAP"
				var HTMLReport = require('protractor-html-reporter-2');
				testConfig = {
					reportTitle: `Test Report for testRun-vbnet`,
					outputPath: 'vbnet',
					outputFilename: 'ProtractorTestReport',
					//screenshotPath: `vbnet\\screenshots`,
					testBrowser: browserName,
					modifiedSuiteName: false,
					//screenshotsOnlyOnFailure: true,
					testPlatform: platform
				};
				new HTMLReport().from(`vbnet\\guitest-xmloutput.xml`, testConfig);	
		},
       getPageTimeout: 20000,
                    allScriptsTimeout: 3000000,
                    jasmineNodeOpts: {defaultTimeoutInterval: 3000000},
                    defaultTimeoutInterval: 3000000
      }
        