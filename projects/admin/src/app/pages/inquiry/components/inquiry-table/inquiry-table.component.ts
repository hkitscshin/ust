import { Component, OnInit, Input } from '@angular/core';
import { Inquiry } from '../../../../../../../ust/src/lib/entities/inquiry/types';

@Component({
  selector: 'ust-inquiry-table',
  templateUrl: './inquiry-table.component.html',
  styleUrls: ['./inquiry-table.component.scss']
})
export class InquiryTableComponent implements OnInit {
  @Input() entities: Inquiry[];

  displayedColumns = ['createdAt', 'name', 'title', 'status', 'modify'];

  constructor() { }

  ngOnInit() {
  }

}
