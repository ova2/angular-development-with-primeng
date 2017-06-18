import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Message, TreeNode} from 'primeng/components/common/api';
import {VCardService} from './service/vcard.service';
import {VCard} from './service/vcard';

@Component({
    selector: 'section',
    templateUrl: 'orgchart.component.html'
})
export class OrgChartComponent implements OnInit, OnDestroy {
    activeIndex: number = 0;
    msgs: Message[] = [];
    get$: Subscription;

    dataBasic: TreeNode[];
    dataAdvanced: TreeNode[];
    selectedNode: TreeNode;

    display: boolean = false;
    selectedVCard: VCard;
    private availableVCards: VCard[];

    constructor(private vcardService: VCardService) {
    }

    ngOnInit() {
        this.dataBasic = [
            {
                label: 'CEO',
                expanded: true,
                children: [
                    {
                        label: 'Finance',
                        expanded: true,
                        children: [
                            {label: 'Chief Accountant'},
                            {label: 'Junior Accountant'}
                        ]
                    },
                    {label: 'Marketing'},
                    {
                        label: 'Project Manager',
                        expanded: true,
                        children: [
                            {label: 'Architect'},
                            {label: 'Frontend Developer'},
                            {label: 'Backend Developer'}
                        ]
                    }
                ]
            }
        ];

        this.dataAdvanced = [
            {
                label: 'CEO',
                expanded: true,
                type: 'department',
                styleClass: 'org-dept',
                data: {id: '1', name: 'Alex Konradi', avatar: 'man.png'},
                children: [
                    {
                        label: 'Finance',
                        expanded: true,
                        type: 'department',
                        styleClass: 'org-dept',
                        data: {id: '2', name: 'Sara Schmidt', avatar: 'women.png'},
                        children: [
                            {
                                label: 'Chief Accountant',
                                styleClass: 'org-role'
                            },
                            {
                                label: 'Junior Accountant',
                                styleClass: 'org-role'
                            }
                        ]
                    },
                    {
                        label: 'Marketing',
                        type: 'department',
                        styleClass: 'org-dept',
                        data: {id: '3', name: 'Veronica Schiefel', avatar: 'women.png'}
                    },
                    {
                        label: 'Project Manager',
                        expanded: true,
                        type: 'department',
                        styleClass: 'org-dept',
                        data: {id: '4', name: 'Max Mustermann', avatar: 'man.png'},
                        children: [
                            {
                                label: 'Architect',
                                styleClass: 'org-role'
                            },
                            {
                                label: 'Frontend Developer',
                                styleClass: 'org-role'
                            },
                            {
                                label: 'Backend Developer',
                                styleClass: 'org-role'
                            }
                        ]
                    }
                ]
            }
        ];
    }

    ngOnDestroy() {
        this.get$.unsubscribe();
    }

    onNodeSelect(event: any) {
        if (this.availableVCards == null) {
            this.get$ = this.vcardService.getVCards().subscribe(
                (vcards: VCard[]) => {
                    this.availableVCards = vcards;
                    this.showInfo(event);
                });
        } else {
            this.showInfo(event);
        }
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    private showInfo(event: any) {
        this.selectedVCard = null;

        this.availableVCards.some((element: VCard) => {
            if (event.node.data && element.id === event.node.data.id) {
                this.selectedVCard = element;
                return true;
            }
        });

        if (this.selectedVCard) {
            // show VCard in dialog
            this.display = true;
        } else {
            // show node label in growl
            this.msgs = [];
            this.msgs.push({severity: 'Label', summary: event.node.label});
        }
    }
}
