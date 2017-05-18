import {ActionReducer, Action} from '@ngrx/store';
import {AppStore} from './app.store';
import {CrudActions} from './crud.actions';
import {Employee} from '../model/employee';

export const crudReducer: ActionReducer<AppStore> = (state: AppStore = {employees: []}, action: Action): AppStore => {
    switch (action.type) {
        case CrudActions.LOAD_EMPLOYEES:
            return {
                employees: action.payload
            };

        case CrudActions.DELETE_EMPLOYEE:
            let employees = state.employees.filter(
                (element: Employee) => element.id !== action.payload);
            return {employees};

        default:
            return state;
    }
};
