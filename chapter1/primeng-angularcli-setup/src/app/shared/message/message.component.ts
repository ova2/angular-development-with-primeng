import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  msgs: Message[] = [];

  ngOnInit() {
    this.msgs.push({severity: 'success', summary: 'Success Message'});
  }
}
