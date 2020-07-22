'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = "ANDROID";
//var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
     	platformName: 'Android',
		browserName: 'Android',
		platformVersion: "9",
		deviceName: "Pixel 3 API 28 2 SELENIUM",
		automationName: "Appium",   
		app: './platforms/android/app/build/outputs/apk/debug/app-debug.apk',
		autoWebview: true,
		autoGrantPermissions: true,
		chromedriverExecutable: './.chromedrivers/chromedriver-2.44',
		//browserName: 'Chrome'
    }).
    build();
};

var buildIosDriver = function(){
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'iOS',
      platformVersion: '10.0',
      deviceName: 'iPhone 6',
      browserName: 'safari'
    }).
    build();
};

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome('node_modules/.bin/chromedriver')).
    build();
};


var buildFirefoxDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
   case 'IOS':
    var driver = buildIosDriver();
    break;
  case 'FIREFOX':
    var driver = buildFirefoxDriver();
    break;
  default:
    var driver = buildChromeDriver();
}

var getDriver = function() {
  return driver;
};

var World = function World() {
console.log('Inside world function');
  var defaultTimeout = 80000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  //this.waitFor = function(cssLocator, timeout) {
   
  
  
};

module.exports.World = World;
module.exports.getDriver = getDriver;