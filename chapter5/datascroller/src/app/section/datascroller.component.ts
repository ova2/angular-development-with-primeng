import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';

@Component({
    selector: 'section',
    templateUrl: 'datascroller.component.html'
})
export class DataScrollerComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    totalRecords: number = 100;

    basicBrowsers: Browser[];
    facetBrowsers: Browser[];
    inlineBrowsers: Browser[];
    lazyloadingBrowsers: Browser[];
    loaderBrowsers: Browser[];
    selectedBrowser: Browser;

    displayDialog: boolean;

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.slice(0,4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.facetBrowsers = browsers.slice(0,4));
        this.browserService.getBrowsers().subscribe((browsers: any) => this.inlineBrowsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.loaderBrowsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.slice(0,4));
    }

    selectBrowser(browser: Browser) {
        this.selectedBrowser = browser;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedBrowser = null;
    }

    loadData(event: any) {
        let start = event.first;//event.first = First row offset
        let end = start + event.rows;//event.rows = Number of rows per page
        this.browserService.getBrowsers().subscribe((browsers: any) => this.lazyloadingBrowsers = browsers.slice(start,end));
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
