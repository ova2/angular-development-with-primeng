import {Component} from '@angular/core';
import ShapeType from './shape-type';

@Component({
    selector: 'ge-shapes',
    templateUrl: 'shapes.component.html'
})
export class ShapesComponent {

    type: ShapeType;

    onClick(mode: string) {
        this.type = ShapeType[mode];
    }

    isSelected(name: string): boolean {
        return this.type === void 0 ? false : ShapeType[this.type] === name;
    }
}
