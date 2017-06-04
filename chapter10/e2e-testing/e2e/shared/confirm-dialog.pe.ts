import {element, by, ElementFinder} from 'protractor';
import {promise, By} from 'selenium-webdriver';

export class ConfirmDialogPageElement {
    element: ElementFinder;

    constructor(by: By) {
        this.element = element(by);
    }

    isDisplayed(): promise.Promise<boolean> {
        return this.element.isDisplayed();
    }

    confirm() {
        this.clickButton('fa-check');
    }

    cancel() {
        this.clickButton('fa-close');
    }

    private clickButton(icon: string) {
        let button = this.element.$('button .' + icon).element(by.xpath('..'));
        button.click();
    }
}
