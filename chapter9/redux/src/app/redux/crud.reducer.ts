import {ActionReducer, Action} from '@ngrx/store';
import {AppStore} from './app.store';
import {CrudActions} from './crud.actions';
import {Employee} from '../model/employee';

const initialState: AppStore = {employees: [], selectedEmployee: null};

export const crudReducer: ActionReducer<AppStore> = (state: AppStore = initialState, action: Action): AppStore => {
    switch (action.type) {
        case CrudActions.LOAD_EMPLOYEES:
            return {
                employees: action.payload,
                selectedEmployee: null
            };

        case CrudActions.DELETE_EMPLOYEE:
            return {
                employees: state.employees.filter(
                    (element: Employee) => element.id !== action.payload),
                selectedEmployee: null
            };

        case CrudActions.CREATE_EMPLOYEE:
            return {
                employees: [...state.employees, action.payload],
                selectedEmployee: null
            };

        case CrudActions.UPDATE_EMPLOYEE:
            let index = -1;
            // clone employees array with updated employee
            let employees = state.employees.map((employee: Employee, idx: number) => {
                if (employee.id === action.payload.id) {
                    index = idx;
                    return Object.assign({}, action.payload);
                }
                return employee;
            });

            let selectedEmployee = index >= 0 ? employees[index] : null;
            return {employees, selectedEmployee};

        default:
            return state;
    }
};
