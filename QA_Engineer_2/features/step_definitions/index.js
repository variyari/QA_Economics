'use strict';
const { Given, Then } = require('cucumber');
const assert = require('assert');
const { By, until } = require('selenium-webdriver');
const World = require('../support/world');
const loadIniFile = require('read-ini-file')
const path = require('path')
const fixture = path.join(__dirname, 'testdata.ini')
const config = loadIniFile.sync(fixture)





Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Given(/^I clicks on Sign In$/, () => World.clicksOnButton(config.SignIn));

Given(/^I clicks on Register$/, () => World.clicksOnButton(config.Register));

Given(/^title of page should be "(.*)"$/, async function(expectedTitle)  {
  
  return World.matchTitle(expectedTitle);
});

Then(/^I should see the navigation bar$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.NavBar))).isDisplayed());
});

Then(/^I should see the keyword search$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.keywordSearch))).isDisplayed());
});

Then(/^I should see the footer$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.footer))).isDisplayed());
});

Then(/^I should see the job sector section$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.jobSector))).isDisplayed());
});

Then(/^I should see the location search$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.locationSearch))).isDisplayed());
});

Then(/^I should see the jobs blog$/, async function()  {
  
  return (await (await World.driver.findElement(By.xpath(config.jobBlogs))).isDisplayed());
});

