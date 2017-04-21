import {Component} from '@angular/core';

import PaletteMode from './palette-mode';

@Component({
    selector: 'ge-palette',
    templateUrl: 'palette.component.html'
})
export class PaletteComponent {

    mode: PaletteMode;

    onClick(mode: string) {
        this.mode = PaletteMode[mode];
    }

    isSelected(name: string): boolean {
        return this.mode === void 0 ? false : PaletteMode[this.mode] === name;
    }
}
