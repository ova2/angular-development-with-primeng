import {Component} from '@angular/core';
import {Message, MenuItem} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'calendar.component.html'
})
export class CalendarComponent {
    basicDateInput: Date;
    localizedDateInput: Date;
    advancedDateInput: Date;
    timeDateInput: Date;
    inlineDateInput: Date;
    iconDateInput: Date;
    navigatorDateInput: Date;
    minmaxDateInput: Date;
    disabeDaysDateInput: Date;
    eventsDateInput: Date;
    readonlyDateInput: Date;
    disableDateInput: Date;
    invalidDates: Array<Date>;
    minDate: Date;
    maxDate: Date;
    time: boolean;
    de: any;
    types: SelectItem[];
    selectedHourFormat: string = '12';
    msgs: Message[] = [];
    activeIndex: number = 0;

    private items: MenuItem[];

    onSelect() {
        this.msgs.push({severity: 'info', summary: 'The calendar date is selected'});
    }

    onBlur() {
        this.msgs.push({severity: 'info', summary: 'Calendar lost the focus'});
    }

    onFocus() {
        this.msgs.push({severity: 'info', summary: 'Calendar got the focus'});
    }

    set hourFormat(hourFormat: string) {
        this.selectedHourFormat = hourFormat;
        if (this.timeDateInput) {
            this.timeDateInput = new Date(this.timeDateInput.getTime());
        }
    }

    get hourFormat(): string {
        return this.selectedHourFormat;
    }

    ngOnInit() {
        this.de = {
            firstDayOfWeek: 1,
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            dayNamesMin: ['S', 'M', 'D', 'M ', 'D', 'F ', 'S'],
            monthNames: [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
                'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
        };

        this.types = [];
        this.types.push({label: '12H Format', value: '12'});
        this.types.push({label: '24H Format', value: '24'});

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        this.items = [
            {
                label: 'Basic',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Basic Calendar', detail: event.item.label});
                }
            },
            {
                label: 'Inline',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Inline Calendar', detail: event.item.label});
                }
            },
            {
                label: 'Localization',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Localization-German', detail: event.item.label});
                }
            },
            {
                label: 'Icon',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Calendar with Icon', detail: event.item.label});
                }
            },
            {
                label: 'Navigator',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Calendar with Navigator', detail: event.item.label});
                }
            },
            {
                label: 'MinMax',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Calendar with MinMax', detail: event.item.label});
                }
            },
            {
                label: 'Disable days&date',
                command: (event: any) => {
                    this.activeIndex = 6;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Calendar with Disable days & dates', detail: event.item.label});
                }
            },
            {
                label: 'ShowTime',
                command: (event: any) => {
                    this.activeIndex = 7;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Calendar ShowTime', detail: event.item.label});
                }
            },
            {
                label: 'Events',
                command: (event: any) => {
                    this.activeIndex = 8;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Events:onSelect,onFocus,onBlur', detail: event.item.label});
                }
            },
            {
                label: 'Readonly/Disable',
                command: (event: any) => {
                    this.activeIndex = 9;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Readonly/Disable', detail: event.item.label});
                }
            },
            {
                label: '(Advanced features)',
                command: (event: any) => {
                    this.activeIndex = 10;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Advanced features', detail: event.item.label});
                }
            },

        ];

    }
}
