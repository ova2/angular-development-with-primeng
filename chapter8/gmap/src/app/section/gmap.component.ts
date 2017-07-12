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

    overlaysEvents: any[];

    dialogVisible: boolean;

    markerTitle: string;

    map: any;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;

    activeIndex: number = 0;

    msgs: Message[] = [];

    ngOnInit() {
        this.options = {
            center: {lat: 14.4426, lng: 79.9865},
            zoom: 8
        };

        this.initOverlays();

        this.infoWindow = new google.maps.InfoWindow();
    }

    handleMapReady(event: any) {
        this.msgs = [];
        this.map = event.map;
        this.msgs.push({severity: 'info', summary: 'Map is ready', detail: 'Map is loaded'});
    }

    handleMapClick(event: any) {
        this.msgs = [];
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
        this.msgs.push({severity: 'info', summary: 'Map is clicked', detail: this.selectedPosition});
    }

    handleOverlayClick(event: any) {
        this.msgs = [];
        let isMarker = event.overlay.getTitle !== undefined;

        if (isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('' + title + '');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            this.msgs.push({severity: 'info', summary: 'Marker Selected', detail: title});
        } else {
            this.msgs.push({severity: 'info', summary: 'Shape Selected', detail: ''});
        }
    }

    handleZoomChanged(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The map zoom options are changed'});
    }

    handleMapDragEnd(event: any) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The map drag is reached end'});
    }

    addMarker() {
        this.overlaysEvents.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(),
            lng: this.selectedPosition.lng()}, title: this.markerTitle, draggable: this.draggable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }

    handleDragStart(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Marker Drag started', detail: event.overlay.getTitle()});
    }

    handleDragEnd(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle()});
    }

    initOverlays() {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: 14.6188043, lng: 79.9630253}, title: 'Talamanchi'}),
                new google.maps.Marker({position: {lat: 14.4290442, lng: 79.9456852}, title: 'Nellore'}),
                new google.maps.Polygon({paths: [
                    {lat: 14.1413809, lng: 79.8254154}, {lat: 11.1513809, lng: 78.8354154},
                    {lat: 15.1313809, lng: 78.8254154}, {lat: 15.1613809, lng: 79.8854154}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 14.1413809, lng: 79.9513809},
                    fillColor: '#197642', fillOpacity: 0.25, strokeWeight: 1, radius: 25000}),
                new google.maps.Polyline({path: [{lat: 14.1413809, lng: 79.9254154},
                    {lat: 14.6413809, lng: 79.9254154}], geodesic: true, strokeColor: '#F0F000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }

        if (!this.overlaysEvents || !this.overlaysEvents.length) {
            this.overlaysEvents = [
                new google.maps.Marker({position: {lat: 14.6188043, lng: 79.9630253}, title: 'Talamanchi'}),
                new google.maps.Marker({position: {lat: 14.4290442, lng: 79.9456852}, title: 'Nellore'}),
                new google.maps.Polygon({paths: [
                    {lat: 14.1413809, lng: 79.8254154}, {lat: 11.1513809, lng: 78.8354154},
                    {lat: 15.1313809, lng: 78.8254154}, {lat: 15.1613809, lng: 79.8854154}
                ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 14.1413809, lng: 79.9513809},
                    fillColor: '#197642', fillOpacity: 0.25, strokeWeight: 1, radius: 25000}),
                new google.maps.Polyline({path: [{lat: 14.1413809, lng: 79.9254154},
                    {lat: 14.6413809, lng: 79.9254154}], geodesic: true, strokeColor: '#F0F000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }
    }

    zoomIn(map: any) {
        map.setZoom(map.getZoom() + 1);
    }

    zoomOut(map: any) {
        map.setZoom(map.getZoom() - 1);
    }

    clear() {
        this.overlaysEvents = [];
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
