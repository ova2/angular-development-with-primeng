import {Employee} from '../model/employee';

export interface AppStore {
    employees: Employee[];
    selectedEmployee: Employee;
}
