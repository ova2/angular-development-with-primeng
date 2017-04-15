import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from  '@angular/forms';

@Component({
    selector: 'section',
    templateUrl: 'src/app/section/section.component.html',
    styleUrls: ['src/app/section/section.component.css']
})
export class SectionComponent implements OnInit {
    userform: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.userform = this.fb.group({
            username: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        // do something
    }
}
