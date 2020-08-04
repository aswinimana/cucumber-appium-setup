'use strict';
const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
var driver = require('../support/cucumber-appium-config.js').getDriver();
const By = webdriver.By;
const Keys = webdriver.Key;
const until = webdriver.until;

Given(/^I am on landing page$/, { timeout: 100 * 1000 }, async function() {
   await driver.wait(until.elementLocated(By.tagName('span')), 100000);
   driver.sleep(30000);
   return 'foo';
});

When(/^I login with the username "([^"]*)" and password "([^"]*)"$/, async function(username, password) {
	driver.findElement(By.name('username')).sendKeys(" ");
		driver
		.findElement(By.name('username'))
		.sendKeys(username)
		.then(() => driver.findElement(By.name('password')).sendKeys(password))
		.then(() => driver.findElement(By.className('btn btn-primary')).click())
		.then(() => {
			driver.sleep(100000);
		//driver.wait(until.elementLocated(By.className('ul-menu-list'))).then(() => {
		  //console.log('Page login is successful. Ready to test features');
		//  callback();
		//}, 20 * 1000);
});
});


/**** BUTTON CLICKS ***/
Then(/^I click a button with the class "([^"]*)"$/, { timeout: 60 * 1000 }, async function(buttonname) {
  driver.sleep(10000);
  var elem = driver.findElement(By.className(buttonname));
  elem.click();
  await driver.wait(until.elementLocated(By.className('l-modal-popup m-popup-big')), 100000);
  driver.sleep(100000);
 });

    
/****CHECK FOR THE STRINGS ***/

Then(/^I should see "([^"]*)" in the tag "([^"]*)"$/, { timeout: 40 * 1000 }, function(message, tagname) {
  var bodyText = driver.findElement(By.tagName(tagname)).getText();
  return expect(bodyText).to.eventually.contain(message);
});

Then(/^I should see "([^"]*)" on an element with id "([^"]*)"$/, async function(message, idname) {
	await driver.wait(until.elementLocated(By.id(idname)), 30000);
	var bodyText = driver.findElement(By.id(idname)).getText();
    return expect(bodyText).to.eventually.contain(message);
});

/****CHECK CONTENT IS AVAILABLE WITHIN AN ELEMENT ***/

Then(/^I check content available for "([^"]*)"$/, { timeout: 30 * 1000 }, function(classname) {
	driver.sleep(20000);
	return driver.wait(until.elementsLocated(By.className(classname)), 30*1000)
	.then(() => {
		return driver.findElement(By.className(classname));
	})     
}); 

/****CHECK IMAGE IS AVAILABLE WITHIN AN ELEMENT ***/
When(/^I check for image with class "([^"]*)"$/, { timeout: 30 * 1000 }, function(classname) {
	return driver.wait(until.elementsLocated(By.className(classname)), 10*1000)
	.then(() => {
		return driver.findElement(By.className(classname));
	})     
}); 

/**** FILL A TEXTFIELD WITH VALUE ***/
When(/^I fill in "([^"]*)" on the field "([^"]*)"$/, async function(typed,selectorname) {
	driver.wait(until.elementsLocated(By.id(selectorname)), 100*1000);
	selectfield = driver.findElement(By.id(selectorname));
	selectfield.sendKeys(typed);
	driver.sleep(5000);
});
