import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ust-finance-chart-sales',
  templateUrl: './finance-chart-sales.component.html',
  styleUrls: ['./finance-chart-sales.component.scss']
})
export class FinanceChartSalesComponent implements OnInit {
  @Input() data: any[];

  type = 'ColumnChart';
  columnNames = ['월', '매출액'];
  options = {
    legend: {
      position: 'none'
    },
    chartArea: {
      left: 70,
      top: 20,
      width: '70%',
      height: '80%',
    },
    vAxis: {
      minValue: 0
    },
    series: {
      0: { color: '#ea4d07' },
    }
  };
  width = 294;
  height = 307;

  constructor() { }

  ngOnInit() {
  }

}
