import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SectionComponent} from './section.component';

// import needed PrimeNG modules here
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule
    ],
    exports: [SectionComponent],
    declarations: [SectionComponent]
})
export class SectionModule {
}
