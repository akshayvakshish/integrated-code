import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  public doughnutChartLabels = ['Banking & Finance', 'Pharma & Healthcare', 'E-commerce', 'Retail','Media & Entertainment','Travel & Hospitality','Automobile'];
  public doughnutChartData = [79, 39, 54, 48,33,52,44];
  public doughnutChartType = 'doughnut';
  constructor() { }
  ngOnInit() {
  }
}