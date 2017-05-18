import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';

@Injectable()
export class CrudActions {
    static LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
    static CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
    static UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
    static DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

    loadEmployees(employees: Employee[]): Action {
        return {
            type: CrudActions.LOAD_EMPLOYEES,
            payload: employees
        };
    }

    createEmployee(employee: Employee): Action {
        return {
            type: CrudActions.CREATE_EMPLOYEE,
            payload: employee
        };
    }

    updateEmployee(employee: Employee): Action {
        return {
            type: CrudActions.UPDATE_EMPLOYEE,
            payload: employee
        };
    }

    deleteEmployee(id: string): Action {
        return {
            type: CrudActions.DELETE_EMPLOYEE,
            payload: id
        };
    }
}
