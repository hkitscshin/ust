import { Component, OnInit } from '@angular/core';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';

@Component({
  selector: 'ust-finance-page',
  templateUrl: './finance-page.component.html',
  styleUrls: ['./finance-page.component.scss']
})
export class FinancePageComponent implements OnInit {
  categories = Object.keys(FinanceCategory).map(key => FinanceCategory[key]);

  constructor() { }

  ngOnInit() {
  }

}
