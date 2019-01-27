import {browser, element, by} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('dwm-root h1')).getText();
  }
}
