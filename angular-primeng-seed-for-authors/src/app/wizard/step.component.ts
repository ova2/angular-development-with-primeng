import {Component, Input} from '@angular/core';

@Component({
    selector: 'pe-step',
    template: `
        <div *ngIf="active" [class]="styleClass">
            <ng-content></ng-content>
        </div>
    `
})
export class StepComponent {
    @Input() styleClass: string;
    @Input() label: string;
    active: boolean = false;
}
