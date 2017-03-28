import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'fileupload.component.html'
})
export class InputMaskComponent {
    msgs: Message[];

    uploadedFiles: any[] = [];

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
