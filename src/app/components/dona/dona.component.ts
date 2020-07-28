import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: string = 'Gráfica';
  @Input('labels') doughnutChartLabels: Label[] = ['a', 'b', 'c'];
  @Input('data') doughnutChartData: MultiDataSet = [];


  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
}
