import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'galleria.component.html'
})
export class GalleriaComponent {
    activeIndex: number = 0;
    msgs: Message[] = [];

    images: any[];

    ngOnInit() {
        this.images = [];
        this.images.push({
            source: '/assets/data/images/cars/Yeni.png',
            alt: 'This is a first car',
            title: 'Yeni Vollkswagen CC'
        });
        this.images.push({
            source: '/assets/data/images/cars/Golf.png',
            alt: 'This is a second car',
            title: 'Golf'
        });
        this.images.push({
            source: '/assets/data/images/cars/Jetta.png',
            alt: 'This is a third car',
            title: 'Jetta'
        });
        this.images.push({
            source: '/assets/data/images/cars/Passat.png',
            alt: 'This is a fourth car',
            title: 'Passat'
        });
        this.images.push({
            source: '/assets/data/images/cars/Polo.png',
            alt: 'This is a fifth car',
            title: 'Polo'
        });
        this.images.push({
            source: '/assets/data/images/cars/Scirocco.png',
            alt: 'This is a sixth car',
            title: 'Scirocco'
        });
        this.images.push({
            source: '/assets/data/images/cars/Touareg.png',
            alt: 'This is a seventh car',
            title: 'Touareg'
        });
    }
    
    onImageClicked($event: any) {
        
    }    

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
