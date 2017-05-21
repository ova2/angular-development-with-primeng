import {Component, OnInit, OnDestroy} from '@angular/core';
import {EmployeeService} from './service/employee.service';
import {Employee} from '../model/employee';
import {Message} from 'primeng/components/common/api';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';
import {AppStore} from '../redux/app.store';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';

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

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private store: Store<AppStore>, private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.store.select('crudReducer').takeUntil(this.destroy$).subscribe(
            (store: AppStore) => {
                this.employees = store.employees;
                this.selectedEmployee = store.selectedEmployee;
            });

        this.employeeService.getEmployees().takeUntil(this.destroy$).subscribe(
            action => this.store.dispatch(action),
            error => this.showError(error)
        );
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
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

        this.employeeService.deleteEmployee(this.selectedEmployee.id)
            .finally(() => {
                this.employeeForDialog = null;
            })
            .takeUntil(this.destroy$)
            .subscribe(
                (action) => {
                    this.store.dispatch(action);
                    this.showSuccess('Employee was successfully removed');
                },
                error => this.showError(error)
            );
    }

    save() {
        if (this.employeeForDialog.id) {
            // update
            this.employeeService.updateEmployee(this.employeeForDialog)
                .finally(() => {
                    this.employeeForDialog = null;
                    this.displayDialog = false;
                })
                .takeUntil(this.destroy$)
                .subscribe(
                    (action) => {
                        this.store.dispatch(action);
                        this.showSuccess('Employee was successfully updated');
                    },
                    error => this.showError(error)
                );
        } else {
            // create
            this.employeeService.createEmployee(this.employeeForDialog)
                .finally(() => {
                    this.employeeForDialog = null;
                    this.displayDialog = false;
                })
                .takeUntil(this.destroy$)
                .subscribe(
                    (action) => {
                        this.store.dispatch(action);
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
