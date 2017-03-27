import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
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
    minDate: Date;
    maxDate: Date;
    time: boolean;
    de: any;
    types: SelectItem[];
    selectedHourFormat: string = '12';
    msgs: Message[] = [];

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
    }

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
            // update reference to the input value in order to trigger proper change detection.
            // Angular doesn't trigger change detection if the object reference stays the same.
            this.timeDateInput = new Date(this.timeDateInput.getTime());
        }
    }

    get hourFormat(): string {
        return this.selectedHourFormat;
    }
}
