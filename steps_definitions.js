const { Given, When, Then } = require('cucumber');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const By = webdriver.By;
const Keys = webdriver.Key;
const until = webdriver.until;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const firefox = require('selenium-webdriver/firefox');
//const path = require('firefox').path;

Given(/^I am on landing page$/, { timeout: 10 * 1000 }, async function() {
   await this.driver.wait(until.elementLocated(By.className('menu-wrapper')), 10000);
   return 'foo';
});

Then(/^I should see "([^"]*)" in the tag "([^"]*)"$/, { timeout: 40 * 1000 }, function(message, tagname) {
  var bodyText = this.driver.findElement(By.tagName(tagname)).getText();
  return expect(bodyText).to.eventually.contain(message);
});

Then(/^I should see "([^"]*)" on an element with id "([^"]*)"$/, async function(message, idname) {
	await this.driver.wait(until.elementLocated(By.id(idname)), 30000);
	var bodyText = this.driver.findElement(By.id(idname)).getText();
    return expect(bodyText).to.eventually.contain(message);
});

Then(/^I should see "([^"]*)" on an element with class "([^"]*)"$/, async function(message, classname) {
	this.driver.sleep(30000);
	var bodyText = this.driver.findElement(By.className(classname)).getText();
    return expect(bodyText).to.eventually.contain(message);
});

Then(/^I should see "([^"]*)" on an element with xpath "([^"]*)"$/, async function(message, selectorname) {
	this.driver.sleep(20000);
	var bodyText = this.driver.findElement(By.xpath(selectorname)).getText();
    return expect(bodyText).to.eventually.contain(message);
});

When(/^I follow "([^"]*)"$/, { timeout: 20 * 1000 }, function (linkname) {
	return this.driver.findElement(webdriver.By.linkText(linkname)).click()
});

Then(/^I click a button with the xpath "([^"]*)"$/, { timeout: 60 * 1000 }, async function(buttonxpath) {
  this.driver.sleep(10000);
  var elem =  this.driver.findElement(By.xpath(buttonxpath));
  elem.click();
  this.driver.sleep(60000);
 });