import {Component, OnInit, OnDestroy} from '@angular/core';
import {EmployeeService} from './service/employee.service';
import {Employee} from '../model/employee';
import {Message} from 'primeng/components/common/api';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/finally';

@Component({
    selector: 'section',
    templateUrl: './crud.component.html'
})
export class DataTableCrudComponent implements OnInit, OnDestroy {

    employees: Employee[];
    selectedEmployee: Employee;
    employeeForDialog: Employee;
    displayDialog: boolean;
    msgs: Message[] = [];

    get$: Subscription;
    add$: Subscription;
    edit$: Subscription;
    delete$: Subscription;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.get$ = this.employeeService.getEmployees().subscribe(
            employees => this.employees = employees,
            error => this.showError(error)
        );
    }

    ngOnDestroy() {
        this.get$.unsubscribe();
        this.add$.unsubscribe();
        this.edit$.unsubscribe();
        this.delete$.unsubscribe();
    }

    add() {
        // create an empty employee
        this.employeeForDialog = {
            id: null, firstName: null, lastName: null, profession: null, department: null
        };
        
        this.displayDialog = true;
    }

    edit() {
        if (this.selectedEmployee == null) {
            return;
        }

        // create a clone of the selected employee
        this.employeeForDialog = Object.assign({}, this.selectedEmployee);

        this.displayDialog = true;
    }

    remove() {
        if (this.selectedEmployee == null) {
            return;
        }

        this.delete$ = this.employeeService.deleteEmployee(this.selectedEmployee.id)
            .finally(() => {
                this.employeeForDialog = null;
                this.selectedEmployee = null;
            })
            .subscribe(
                () => {
                    this.employees = this.employees.filter(
                        (element: Employee) => element.id !== this.selectedEmployee.id);
                    this.showSuccess('Employee was successfully removed');
                },
                error => this.showError(error)
            );
    }

    save() {
        if (this.employeeForDialog.id) {
            // update
            this.edit$ = this.employeeService.updateEmployee(this.employeeForDialog)
                .finally(() => {
                    this.employeeForDialog = null;
                    this.displayDialog = false;
                })
                .subscribe(
                    () => {
                        this.employees.some((element: Employee, index: number) => {
                            if (element.id === this.employeeForDialog.id) {
                                this.employees[index] = Object.assign({}, this.employeeForDialog);
                                this.employees = [...this.employees];
                                this.selectedEmployee = this.employees[index];
                                return true;
                            }
                        });
                        this.showSuccess('Employee was successfully updated');
                    },
                    error => this.showError(error)
                );
        } else {
            // create
            this.add$ = this.employeeService.createEmployee(this.employeeForDialog)
                .finally(() => {
                    this.employeeForDialog = null;
                    this.selectedEmployee = null;
                    this.displayDialog = false;
                })
                .subscribe(
                    (employee: Employee) => {
                        this.employees = [...this.employees, employee];
                        this.showSuccess('Employee was successfully created');
                    },
                    error => this.showError(error)
                );
        }
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
