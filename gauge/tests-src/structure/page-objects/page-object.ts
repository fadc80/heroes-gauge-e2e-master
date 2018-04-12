import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

export abstract class PageObject {
  abstract path: string;
  
  constructor(
    protected browser: protractor.ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: protractor.ProtractorBy,
    protected element: protractor.ElementHelper,
    protected expect: Chai.ExpectStatic) {
  }

  waitForElementToBePresent(element, done){
    this.driver.wait(() => {
      if(element.isPresent()) {
        done();
        return true;
      } else {
        return false;
      }
    }, 60000);
  }

  waitForElementToBeDisplayed(element, done){
    this.driver.wait(() => {
      if(element.isDisplayed()) {
        done();
        return true;
      } else {
        return false;
      }
    }, 60000);
  }
}