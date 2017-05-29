import {CanDeactivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {ConfirmationService} from 'primeng/components/common/api';
import {FirstViewComponent} from '../first-view/first-view.component';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<FirstViewComponent> {

    constructor(private confirmationService: ConfirmationService) {
    }

    canDeactivate(component: FirstViewComponent) {
        // Allow navigation if the form is unchanged
        if (!component.dirty) {
            return true;
        }

        return Observable.create((observer: Observer<boolean>) => {
            this.confirmationService.confirm({
                message: 'You have unsaved changes. Are you sure you want to leave this page?',
                accept: () => {
                    observer.next(true);
                    observer.complete();
                },
                reject: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}
