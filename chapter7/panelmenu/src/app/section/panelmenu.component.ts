import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'panelmenu.component.html'
})
export class PanelMenuComponent {
    activeIndex: number = 0;
    msgs: Message[] = [];
    private items: MenuItem[];
    private expandeditems: MenuItem[];

    ngOnInit() {
        this.items = [
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
                    expanded : true
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
                    {label: 'Find', icon: 'fa-search', items: [
                        {label: 'Find Next'},
                        {label: 'Find Previous'},
                    ]}
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
                        ]}
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
                        ]}
                ]
            }
        ];

        this.expandeditems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project', expanded : true},
                        {label: 'Other', expanded : true},
                    ],
                    expanded : true
                },
                    {label: 'Open', expanded : true},
                    {label: 'Quit', expanded : true}
                ],
                expanded : true
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
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
                        ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
