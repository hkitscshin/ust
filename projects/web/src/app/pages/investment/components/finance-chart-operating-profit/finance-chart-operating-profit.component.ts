import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ust-finance-chart-operating-profit',
  templateUrl: './finance-chart-operating-profit.component.html',
  styleUrls: ['./finance-chart-operating-profit.component.scss']
})
export class FinanceChartOperatingProfitComponent implements OnInit {
  @Input() data: any[];

  type = 'ColumnChart';
  columnNames = ['월', '영업이익'];
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
      0: { color: '#ea4d07' }
    }
  };
  width = 294;
  height = 307;

  constructor() { }

  ngOnInit() {
  }

}
