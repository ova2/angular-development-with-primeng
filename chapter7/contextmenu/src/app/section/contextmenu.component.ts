import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'contextmenu.component.html'
})
export class ContextMenuComponent {
    private documentitems: MenuItem[];
    private targetitems: MenuItem[];
    msgs: Message[] = [];
    activeIndex: number = 0;

    ngOnInit() {
        this.documentitems = [
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

        this.targetitems = [
            {
                label: 'Next',
                icon: 'fa-chevron-right'
            },
            {
                label: 'Prev',
                icon: 'fa-chevron-left'
            }
        ];
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
