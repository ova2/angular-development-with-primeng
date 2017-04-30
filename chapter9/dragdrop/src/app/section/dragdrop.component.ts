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
            this.deletedDocs.push(this.draggedDoc);
            this.availableDocs.splice(this.findIndex(this.draggedDoc), 1);
            this.draggedDoc = null;
        }
    }

    dragEnd(event: any) {
        this.draggedDoc = null;
    }

    findIndex(doc: Document) {
        let index = -1;
        for (let i = 0; i < this.availableDocs.length; i++) {
            if (doc.title === this.availableDocs[i].title) {
                index = i;
                break;
            }
        }
        return index;
    }
}
