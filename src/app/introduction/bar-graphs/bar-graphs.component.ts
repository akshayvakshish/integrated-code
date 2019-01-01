import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graphs',
  templateUrl: './bar-graphs.component.html',
  styleUrls: ['./bar-graphs.component.css']
})
export class BarGraphsComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2016', '2017', '2018'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [111345, 139181, 161450], label: 'Data Science'},
    {data: [137500, 158125,161450], label: 'Data Analytics'},
    {data: [150485, 176067, 211280], label: 'Business Analytics'}
  ];
  ngOnInit() {
  }
}
