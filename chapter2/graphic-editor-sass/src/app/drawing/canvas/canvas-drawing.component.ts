import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'ge-canvas-drawing',
    templateUrl: 'canvas-drawing.component.html',
})
export class CanvasDrawingComponent implements AfterViewInit {

    @ViewChild('surface') surface: ElementRef;

    ngAfterViewInit() {
        let element: HTMLCanvasElement = <HTMLCanvasElement>this.surface.nativeElement;
        element.width = element.clientWidth;
        element.height = element.clientHeight;
        
        let ctx = element.getContext('2d');
        ctx.font = '16px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText('Hello Canvas!', 50, 50);
    }
}
