import {Component, OnInit, OnDestroy} from '@angular/core';
import {EmployeeService} from './service/employee.service';
import {Employee} from '../model/employee';
import {Message} from 'primeng/components/common/api';
import {Subscription} from 'rxjs';

@Component({
    selector: 'section',
    templateUrl: './crud.component.html'
})
export class DataTableCrudComponent implements OnInit, OnDestroy {

    employees: Employee[];
    selectedEmployee: Employee;
    msgs: Message[] = [];
    displayDialog: boolean;

    subscriptGet: Subscription;
    subscriptDelete: Subscription;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.subscriptGet = this.employeeService.getEmployees().subscribe(
            employees => this.employees = employees,
            error => this.showError(error)
        );
    }

    ngOnDestroy() {
        this.subscriptGet.unsubscribe();
        this.subscriptDelete.unsubscribe();
    }

    add() {

    }

    edit() {

    }

    remove() {
        if (this.selectedEmployee == null) {
            return;
        }

        this.subscriptDelete = this.employeeService.deleteEmployee(this.selectedEmployee.id).subscribe(
            () => {
                this.employees = this.employees.filter(
                    (element: Employee) => element.id !== this.selectedEmployee.id);
                this.showSuccess('Employee was successfully removed');
            },
            error => this.showError(error)
        );
    }

    private showError(errMsg: string) {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Sorry, an error occurred', detail: errMsg});
    }

    private showSuccess(successMsg: string) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: successMsg});
    }
}
