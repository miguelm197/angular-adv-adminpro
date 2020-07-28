import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public data1 = [[250, 130, 70]];

  public labels2: string[] = [
    'Papas fritas',
    'Hamburguesa',
    'Pascualina',
  ];
  public data2 = [[300, 100, 10]];

  
}
