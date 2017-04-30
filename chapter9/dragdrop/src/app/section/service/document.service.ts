import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Document} from './document';

@Injectable()
export class DocumentService {
    constructor(private http: Http) {
    }

    getDocuments(): Observable<Document[]> {
        return this.http.get('/assets/data/documents.json')
            .map(response => response.json().data.map((doc: any) => ({
                title: doc.title,
                size: doc.size,
                creator: doc.creator,
                creationDate: new Date(doc.creationDate),
                extension: doc.extension
            })));
    }
}
