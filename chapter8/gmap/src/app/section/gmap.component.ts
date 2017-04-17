import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

declare var google: any;

@Component({
    selector: 'section',
    templateUrl: 'gmap.component.html'
})
export class GMapComponent {
    options: any;

    overlays: any[];

    dialogVisible: boolean;

    markerTitle: string;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;

    activeIndex: number = 0;

    msgs: Message[] = [];

    ngOnInit() {
        this.options = {
            center: {lat: 14.4426, lng: 79.9865},
            zoom: 12
        };

        this.initOverlays();

        this.infoWindow = new google.maps.InfoWindow();
    }

    handleMapClick(event:any) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    handleOverlayClick(event:any) {
        this.msgs = [];
        let isMarker = event.overlay.getTitle != undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('' + title + '');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.msgs.push({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            this.msgs.push({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

    addMarker() {
        this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }

    handleDragEnd(event:any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    initOverlays() {
        if(!this.overlays||!this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }
    }

    zoomIn(map:any) {
        map.setZoom(map.getZoom()+1);
    }

    zoomOut(map:any) {
        map.setZoom(map.getZoom()-1);
    }

    clear() {
        this.overlays = [];
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
