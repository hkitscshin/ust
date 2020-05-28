import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ust-finance-chart-net-profit',
  templateUrl: './finance-chart-net-profit.component.html',
  styleUrls: ['./finance-chart-net-profit.component.scss']
})
export class FinanceChartNetProfitComponent implements OnInit {
  @Input() data: any[];

  type = 'ColumnChart';
  columnNames = ['월', '당기순이익'];
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
