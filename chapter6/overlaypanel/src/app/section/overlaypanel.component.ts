import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {OverlayPanel} from 'primeng/components/overlaypanel/overlaypanel';
import {ScoreService} from './service/scoreservice';
import Score from './service/score';

@Component({
    selector: 'section',
    templateUrl: 'overlaypanel.component.html'
})
export class OverlayPanelComponent {
    scores: Score[];

    marks: string;
    percentage: string;

    constructor(private scoreService: ScoreService) { }

    msgs: Message[] = [];
    activeIndex: number = 0;

    selectScore(event:any,score: Score, overlaypanel: OverlayPanel) {
        this.marks = score.marks;
        this.percentage = score.percentage
        overlaypanel.toggle(event);
    }

    ngOnInit() {
        this.scoreService.getScores().subscribe((scores:Score[]) => this.scores = scores);
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    onBeforeShow(){
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail:'Before shown'});
    }

    onAfterShow(){
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail:'After shown'});
    }

    onBeforeHide(){
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail:'Before hide'});
    }

    onAfterHide(){
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail:'After hide'});
    }
}
