import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';
import {EmployeeService} from './service/employee.service';
import Employee from './service/employee';

@Component({
    selector: 'section',
    templateUrl: 'contextmenu.component.html'
})
export class ContextMenuComponent {
    private documentItems: MenuItem[];
    private targetItems: MenuItem[];
    private tableItems: MenuItem[];
    selectedEmployee: Employee;
    msgs: Message[] = [];
    activeIndex: number = 0;
    employees: Employee[];

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
            this.employees = employees;
        });
        this.documentItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ],
                    expanded: true
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ],
            },

            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Cut', icon: 'fa-cut'},
                    {label: 'Copy', icon: 'fa-copy'},
                    {label: 'Paste', icon: 'fa-paste'},
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'},
                    {
                        label: 'Find', icon: 'fa-search', items: [
                        {label: 'Find Next'},
                        {label: 'Find Previous'},
                    ]
                    }
                ]
            },
            {
                label: 'View',
                icon: 'fa-question',
                items: [
                    {
                        label: ''
                    },
                    {
                        label: 'Tool windows',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Project',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'Run'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            }
        ];

        this.targetItems = [
            {
                label: 'Next',
                icon: 'fa-chevron-right'
            },
            {
                label: 'Prev',
                icon: 'fa-chevron-left'
            }
        ];

        this.tableItems = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewEmployee(this.selectedEmployee)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteEmployee(this.selectedEmployee)},
            {label: 'Help', icon: 'fa-close', url: 'https://www.opm.gov/policy-data-oversight/worklife/employee-assistance-programs/'}
        ];
    }

    viewEmployee(employee: Employee) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Employee Selected', detail: employee.name + ' - ' + employee.id});
    }

    deleteEmployee(employee: Employee) {
        this.msgs = [];
        for(let i = 0; i < this.employees.length; i++) {
            if(this.employees[i].id == employee.id) {
                this.employees.splice(i, 1);
                this.msgs.push({severity: 'info', summary: 'Employee Deleted', detail: employee.name + ' - ' + employee.id});
                break;
            }
        }
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
