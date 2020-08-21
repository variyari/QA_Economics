const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities, By , until} = require('selenium-webdriver');
var assert = require('assert');
require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

 clicksOnButton(button) {
    
    const button1=this.driver.wait(until.elementLocated(By.xpath(button)),20000);
    button1.click();
    this.driver.wait(until.elementLocated(By.xpath("//img[@title='Jobs.Economist.com']")),20000);
  }

  matchTitle(expectedTitle){
    var actualTitle=this.driver.getTitle();
    console.log("actualTitle  is"+actualTitle);
    return assert.equal(expectedTitle,actualTitle,"Actual Title"+actualTitle);

  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
