import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {DocumentService} from './service/document.service';
import {Document} from './service/document';

@Component({
    selector: 'section',
    templateUrl: 'dragdrop.component.html'
})
export class DragDropComponent {
    availableDocs: Document[];
    deletedDocs: Document[];
    draggedDoc: Document;

    constructor(private docService: DocumentService) {
    }

    ngOnInit() {
        this.deletedDocs = [];
        this.docService.getDocuments().subscribe((docs: Document[]) => this.availableDocs = docs);
    }

    dragStart(event: any, doc: Document) {
        this.draggedDoc = doc;
    }

    drop(event: any) {
        if (this.draggedDoc) {
            // add draggable element to the deleted documents list 
            this.deletedDocs = [...this.deletedDocs, this.draggedDoc];
            // remove draggable element from the available documents list
            this.availableDocs = this.availableDocs.filter((e: Document) => e.id !== this.draggedDoc.id);
            this.draggedDoc = null;
        }
    }

    dragEnd(event: any) {
        this.draggedDoc = null;
    }
}
