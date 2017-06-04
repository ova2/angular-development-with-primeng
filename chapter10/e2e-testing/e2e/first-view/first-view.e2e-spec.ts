import {FirstViewPage} from './first-view.po';
import {ConfirmDialogPageElement} from '../shared/confirm-dialog.pe';
import {by, browser} from 'protractor';

describe('FirstView', () => {
    let page: FirstViewPage;

    beforeEach(() => {
        page = new FirstViewPage();
        page.navigateTo();
    });
    
    it('should contain proper title', () => {        
        expect(page.getTitle()).toContain('first view');
    });
    
    it('should change the view when no input exists', () => {         
        page.confirm();
        
        expect(browser.getCurrentUrl()).not.toMatch(/\/first-view$/);
    });

    it('should display confirmation dialog when input exists', () => {
        page.typeUsername('Admin');
        page.confirm();
        
        let confirmDialog = new ConfirmDialogPageElement(by.css('p-confirmdialog'));
        
        expect(confirmDialog.isDisplayed()).toBeTruthy();
    });
    
    it('should navigate to another view on confirm', () => {
        page.typeUsername('Admin');
        page.confirm();
        
        let confirmDialog = new ConfirmDialogPageElement(by.css('p-confirmdialog'));
        confirmDialog.confirm();
        
        expect(browser.getCurrentUrl()).not.toMatch(/\/first-view$/);
    });
    
    it('should stay on the same view on cancel', () => {
        page.typeUsername('Admin');
        page.confirm();
        
        let confirmDialog = new ConfirmDialogPageElement(by.css('p-confirmdialog'));
        confirmDialog.cancel();
        
        expect(browser.getCurrentUrl()).toMatch(/\/first-view$/);
    });
});
