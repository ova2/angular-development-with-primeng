import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {EventService} from './service/event.service';
import {MyEvent} from './event/event';

@Component({
    selector: 'section',
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    events: any[];

    headerConfig: any;

    event: MyEvent;

    dialogVisible: boolean = false;

    idGen: number = 100;

    de: any;

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.getEvents().subscribe((events: any) => {this.events = events;});

        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };

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
    }

    loadEvents(event: any) {
        let start = event.view.start;
        let end = event.view.end;
        // In real time the service call filtered based on start and end dates
        this.eventService.getEvents().subscribe((events: any) => {this.events = events;});
    }

    handleDayClick(event: any) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
    }

    handleEventClick(e: any) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;

        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }

        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }

    handleEventMouseover(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventMouseout(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventDragStart(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventDragStop(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventDrop(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventResizeStart(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventResizeStop(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    onEventResize(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    handleDrop(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Event mouse over'});
    }

    handleViewDestroy(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The view is about to be removed from the DOM'});
    }

    saveEvent() {
        //update
        if ( this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        } else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            this.event = null;
        }

        this.dialogVisible = false;
    }

    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }

    findEventIndexById(id: number) {
        let index = -1;
        for (let i = 0; i < this.events.length; i++) {
            if (id === this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
