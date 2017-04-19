import {Component} from '@angular/core';
import {Message,SelectItem} from 'primeng/components/common/api';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
    selector: 'section',
    templateUrl: 'validation.component.html'
})
export class ValidationComponent {
    msgs: Message[] = [];

    registrationform: FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    address: string;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.registrationform = this.formBuilder.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
            'address': new FormControl(''),
            'phone': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label: 'Select Gender', value: ''});
        this.genders.push({label: 'Male', value: 'Male'});
        this.genders.push({label: 'Female', value: 'Female'});
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
    }

    get diagnostic() {
        return JSON.stringify(this.registrationform.value);
    }
}