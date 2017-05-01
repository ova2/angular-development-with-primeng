import {Component, ViewChild} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {UIChart} from 'primeng/primeng';
;

@Component({
    selector: 'section',
    templateUrl: 'charts.component.html'
})
export class ChartComponent {
    msgs: Message[] = [];

    piedata: any;

    bardata: any;

    linedata: any;

    doughnutdata: any;

    radardata: any;

    polardata: any;

    options: any;

    activeIndex: number = 0;

    ngOnInit() {
        this.piedata = {
            labels: ['PrimeNG', 'PrimeUI', 'PrimeReact'],
            datasets: [
                {
                    data: [3000, 1000, 2000],
                    backgroundColor: [
                        '#6544a9',
                        '#51cc00',
                        '#5d4361'
                    ],
                    hoverBackgroundColor: [
                        '#6544a9',
                        '#51cc00',
                        '#5d4361'
                    ]
                }]
        };

        this.bardata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'PrimeNG',
                    backgroundColor: '#66ffcc',
                    borderColor: '#6544a9',
                    data: [10, 15, 13, 27, 22, 34, 44, 48, 42, 64, 77, 89]
                },
                {
                    label: 'PrimeUI',
                    backgroundColor: '#ffb8f0',
                    borderColor: '#cc4e0e',
                    data: [5, 14, 15, 22, 26, 24, 32, 42, 48, 62, 66, 72]
                }
            ]
        };

        this.linedata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'PrimeNG',
                    backgroundColor: '#ffb870',
                    borderColor: '#cc4e0e',
                    data: [13, 22, 15, 38, 41, 42, 25, 53, 53, 63, 77, 93]
                },
                {
                    label: 'PrimeUI',
                    backgroundColor: '#00ff00',
                    borderColor: '#6544a9',
                    data: [15, 11, 18, 28, 32, 32, 42, 52, 48, 62, 77, 84]
                }
            ]
        };

        this.doughnutdata = {
            labels: ['PrimeNG', 'PrimeUI', 'PrimeReact'],
            datasets: [
                {
                    data: [3000, 1000, 2000],
                    backgroundColor: [
                        '#6544a9',
                        '#51cc00',
                        '#5d4361'
                    ],
                    hoverBackgroundColor: [
                        '#6544a9',
                        '#51cc00',
                        '#5d4361'
                    ]
                }]
        };

        this.radardata = {
            labels: ['Requirement', 'Design', 'Implementation', 'Testing', 'Deployment', 'Maintainance'],
            datasets: [
                {
                    label: 'PrimeNG',
                    backgroundColor: 'rgba(162,141,158,0.4)',
                    borderColor: 'rgba(145,171,188,1)',
                    pointBackgroundColor: 'rgba(145,171,188,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(145,171,188,1)',
                    data: [76, 55, 66, 78, 93, 74]
                },
                {
                    label: 'PrimeReact',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [30, 43, 38, 17, 89, 33]
                }
            ]
        };

        this.polardata = {
            datasets: [{
                data: [45, 35, 10, 15, 5],
                backgroundColor: ['#6544a9', '#51cc00', '#5d4361', '#E7E9ED', '#36A2EB'],
                label: 'Prime Libraries'
            }],
            labels: ['PrimeFaces', 'PrimeNG', 'PrimeReact', 'PrimeUI', 'PrimeMobile']
        };

        this.options = {
            title: {
                display: true,
                text: 'PrimeNG vs PrimeUI',
                fontSize: 18
            },
            legend: {
                position: 'bottom'
            },
            //responsive: false,
            //maintainAspectRatio: false
        };
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    selectData(event: any) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Data Selected',
            detail: this.linedata.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

}
