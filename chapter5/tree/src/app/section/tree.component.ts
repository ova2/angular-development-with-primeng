import {Component,ViewChild} from '@angular/core';
import {Message,TreeNode,MenuItem} from 'primeng/components/common/api';
import {TreeNodeService} from './service/treenodeservice';
import {Tree} from 'primeng/components/tree/tree';

@Component({
    selector: 'section',
    templateUrl: 'tree.component.html'
})
export class TreeComponent {
    msgs: Message[] = [];
    activeIndex: number = 0;

    @ViewChild('expandingTree')
    expandingTree: Tree;

    basicTree: TreeNode[];
    singleSelectionTree: TreeNode[];
    multipleSelectionTree: TreeNode[];
    checkboxSelectionTree: TreeNode[];
    templateTree: TreeNode[];
    horizontalTree: TreeNode[];
    lazyTree: TreeNode[];
    contextMenuTree: TreeNode[];
    dragDropTreeOne: TreeNode[];
    dragDropTreeTwo: TreeNode[];
    dragDropTreeThree: TreeNode[];
    programmaticTree: TreeNode[];

    lazyFiles: TreeNode[];

    selectedPlace: TreeNode;

    selectedPlaces: TreeNode;

    selectMultiplePlaces: TreeNode;

    selectedTour: TreeNode[];

    selectedTouristPlace: TreeNode[];

    items: MenuItem[];

    constructor(private nodeService: TreeNodeService) { }

    ngOnInit() {
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.basicTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.singleSelectionTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.multipleSelectionTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.checkboxSelectionTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.templateTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.programmaticTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.lazyTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => this.contextMenuTree = places);
        this.nodeService.getTouristPlaces().subscribe((places: any) => {
            this.horizontalTree = [{
                label: 'Root',
                children: places
            }];
        });
        this.nodeService.getTouristPlaces().subscribe((files: any) => this.dragDropTreeOne = files);

        this.dragDropTreeTwo = [
            {
                label: 'Selection',
                data: 'Selected tourist package',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder'
            }
        ];

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event: any) => this.viewFile(this.selectedTouristPlace)},
            {label: 'Unselect', icon: 'fa-close', command: (event: any) => this.unselectFile()}
        ];
    }

    nodeSelect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    nodeUnselect(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

    nodeExpandMessage(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
    }

    nodeExpand(event: any) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getTouristPlaces().subscribe((nodes: any) => event.node.children = nodes);
        }
    }

    viewFile(selectPlace: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node selected with right click', detail: selectPlace.label});
    }

    unselectFile() {
        this.selectedTouristPlace = null;
    }

    expandAll() {
        this.programmaticTree.forEach( (node: any) => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll() {
        this.programmaticTree.forEach((node: any) => {
            this.expandRecursive(node, false);
        } );
    }

    expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
