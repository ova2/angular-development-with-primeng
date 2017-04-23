import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {BrowserService} from './service/browserservice';
import Browser from './service/browser';

@Component({
    selector: 'section',
    templateUrl: 'datalist.component.html'
})
export class DataListComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    browsers: Browser[];

    selectedBrowser: Browser;

    displayDialog: boolean;

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers:any) => this.browsers = browsers);
    }

    selectBrowser(browser: Browser) {
        this.selectedBrowser = browser;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedBrowser = null;
    }
    onComplete() {
        this.msgs.push(
            {severity: 'info', summary: 'InputMask completed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
