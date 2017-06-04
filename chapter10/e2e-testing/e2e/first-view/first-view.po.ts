import {browser, element, by, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';

export class FirstViewPage {
    nameInput: ElementFinder;
    submitButton: ElementFinder;

    constructor() {
        this.nameInput = element(by.css('input[name="username"]'));
        this.submitButton = element(by.css('button[type="submit"]'));
    }

    navigateTo() {
        browser.get('http://localhost:3000/chapter9/first-view');
    };

    typeUsername(name: string) {
        this.nameInput.sendKeys(name);
    };

    confirm() {
        this.submitButton.click();
    };

    getTitle(): promise.Promise<string> {
        return element(by.css('h1')).getText();
    }
}
