const webdriver = require('selenium-webdriver'), 
		proxy = require('selenium-webdriver/proxy');
const By = webdriver.By;
const until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
const cucumber = require('cucumber');

const chromeCapabilities = webdriver.Capabilities.chrome();
const driver = this.driver;
const fs = require('fs');
const path = require('path');
var mkdirp = require('mkdirp');

var { setWorldConstructor, Before, After, setDefaultTimeout, Status } = require('cucumber');
setDefaultTimeout(40 * 1000);

function CustomMain(callback) {
	const chromeOptions = new chrome.Options()
	
	//chromeOptions.addArguments('--headless')
	this.driver = new webdriver.Builder()
    .forBrowser('chrome')
	.withCapabilities(chromeCapabilities)
	.setChromeOptions(chromeOptions)
	//.setProxy(proxy.manual({ }))
    .build();
}

Before(function(testCase, callback) {
  console.log('Cucumber initializing login');
  const driver = this.driver;
  driver.manage().window().maximize() ;
  driver.get('http://localhost:3000/').then(function(res) {
	driver
	  .findElement(By.id('root'))
	  callback();
  });
  driver.manage().deleteAllCookies();
});

After(async function(scenario) {
	var screenshotPath = path.join(__dirname,'/screenshots/');
	mkdirp(screenshotPath, function (err) {
          if (err) console.error(err);
      });
 	const driver = this.driver;
	if (scenario.result.status === Status.FAILED) {
		var filename_string = (scenario.pickle.name).replace(/ /g,"_");
		var filename = path.join(screenshotPath) + filename_string + ".png";
		
		driver.takeScreenshot().then(function(data){
		   var base64Data = data.replace(/^data:image\/png;base64,/,"")
		   fs.writeFile(filename, base64Data, 'base64', function (err) {
			if (err) console.log(err);
		  });
		}); 
	}
	console.log('Cucumber finished all features. Closing browser');
	//return driver.close();
});

setWorldConstructor(CustomMain);