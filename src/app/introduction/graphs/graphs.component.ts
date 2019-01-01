import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [34, 42, 56, 52,32,24,14,9], label: 'Average annual Salary in analytics' },
    
  ];

  chartLabels = ['0-3 Lakhs', '3-6 Lakhs', '6-10 Lakhs', '10-15 Lakhs','15-25 Lakhs','25-50 Lakhs','50-75 Lakhs','75-100 Lakhs'];

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }
}