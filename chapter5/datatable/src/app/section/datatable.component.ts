import {Component} from '@angular/core';
import {Message,SelectItem} from 'primeng/components/common/api';
import {LazyLoadEvent} from 'primeng/components/common/api';
import {BrowserService} from './service/browser.service';
import Browser from './service/browser';

@Component({
    selector: 'section',
    templateUrl: 'datatable.component.html'
})
export class DataTableComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    browser: Browser;

    basicBrowsers: Browser[];

    browsers: Browser[];

    selectedBrowser: Browser;

    selectedBrowsers: Browser[];

    displayDialog: boolean;

    stacked: boolean;

    newBrowser: boolean;

    totalRecords: number = 100;

    engines: SelectItem[];

    grades: SelectItem[];

    expandedRows: any[];

    cols: any[];

    columnOptions: SelectItem[];

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
        this.browserService.getBrowsers().subscribe((browsers: any) => this.browsers = browsers);
        this.browserService.getBrowsers().subscribe((browsers: any) => this.basicBrowsers = browsers.slice(0,10));
        this.cols = [
            {field: 'engine', header: 'Engine'},
            {field: 'browser', header: 'Browser'},
            {field: 'platform', header: 'Platform'},
            {field: 'grade', header: 'Grade'}
        ];
        this.columnOptions = [];
        for (let col of this.cols) {
            this.columnOptions.push({label: col.header, value: col});
        }

        this.engines = [];
        this.engines.push({label: 'All engines', value: null});
        this.engines.push({label: 'Trident', value: 'Trident'});
        this.engines.push({label: 'Gecko', value: 'Gecko'});
        this.engines.push({label: 'Webkit', value: 'Webkit'});

        this.grades = [];
        this.grades.push({label: 'A', value: 'A'});
        this.grades.push({label: 'B', value: 'B'});
        this.grades.push({label: 'C', value: 'C'});

    }

    onRowClick(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Browser clicked', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowDblClick(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Browser double clicked', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowSelect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Type of selection:', detail: event.type});
        this.msgs.push({severity: 'info', summary: 'Browser Selected', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onRowUnselect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Type of selection:', detail: event.type});
        this.msgs.push({severity: 'info', summary: 'Browser Unselected', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onHeaderCheckboxToggle(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Header checkbox toggled:', detail: event.checked});
    }

    onContextMenuSelect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Selected data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onColResize(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Resized column header' + event.element,
            detail: 'Change of column width' +  event.delta + 'px'});
    }

    onColReorder(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Index of dragged column', detail: event.dragIndex});
        this.msgs.push({severity: 'info', summary: 'Index of dropped column', detail: event.dropIndex});
        this.msgs.push({severity: 'info', summary: 'Columns array after reorder', detail: event.columns});
    }

    onEditInit(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Column is ', detail: event.column});
        this.msgs.push({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onEdit(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Row index', detail: event.index});
        this.msgs.push({severity: 'info', summary: 'Column is ', detail: event.column});
        this.msgs.push({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }
    onEditComplete(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Row index', detail: event.index});
        this.msgs.push({severity: 'info', summary: 'Column is ', detail: event.column});
        this.msgs.push({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onEditCancel(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Row index', detail: event.index});
        this.msgs.push({severity: 'info', summary: 'Column is ', detail: event.column});
        this.msgs.push({severity: 'info', summary: 'Row data', detail: event.data.engine + ' - ' + event.data.browser});
    }

    onPage(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Index of first record:', detail: event.first});
        this.msgs.push({severity: 'info', summary: 'Number of rows: ', detail: event.rows});
    }

    onSort(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Sort field:', detail: event.field});
        this.msgs.push({severity: 'info', summary: 'Sort order: ', detail: event.order});
        if (event.multisortmeta) {
            this.msgs.push({severity: 'info', summary: 'Multisort Meta data:', detail: event.multisortmeta});
        }
    }

    onFilter(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Filter object(field,value and matchmode):', detail: event.filters});
    }

    onRowExpand(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Expanded row:', detail: event.data});
    }
    onRowCollapse(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Collapsed row:', detail: event.data});
    }

    onRowGroupExpand(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Row group expanded:', detail: event.group});
    }

    onRowGroupCollapse(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Row group collapsed:', detail: event.group});
    }

    loadBrowsersLazy(event: LazyLoadEvent) {
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        this.browserService.getBrowsers().subscribe((browsers: any) =>
            this.browsers = browsers.slice(event.first, (event.first + event.rows)));
    }

    addBrowser() {
        this.newBrowser = true;
        this.browser = null;
        this.displayDialog = true;
    }

    save() {
        if (this.newBrowser) {
            this.browsers.push(this.browser);
        } else {
            this.browsers[this.findSelectedBrowserIndex()] = this.browser;
        }

        this.browser = null;
        this.displayDialog = false;
    }

    delete() {
        this.browsers.splice(this.findSelectedBrowserIndex(), 1);
        this.browser = null;
        this.displayDialog = false;
    }

    findSelectedBrowserIndex(): number {
        return this.browsers.indexOf(this.selectedBrowser);
    }

    selectBrowser(browser: Browser) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Browser selected', detail: 'Browser: ' + browser.browser});
    }

    toggle() {
        this.stacked = !this.stacked;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
