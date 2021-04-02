import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car.models';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class PorfolioComponent implements OnInit {
  websiteDesignLists: any;
  graphicDesignLists: Car[] = [
    {
      carNumberPlate: '72B-14512',
      categoryId: 1,
      name: 'Mecedes C250 Exclusive',
      img: 'assets/images/a.png',
      location: 'Las Vegas',
      postDated: '25-11-2021',
      rentCost: 5000,
      status: 'Renting'
    },
    {
      carNumberPlate: '72B-14512',
      categoryId: 1,
      name: 'Ford Mustang 2020',
      img: 'assets/images/b.png',
      location: 'Las Vegas',
      postDated: '25-11-2021',
      rentCost: 5000,
      status: 'Renting'
    },
    {
      carNumberPlate: '72B-14512',
      categoryId: 1,
      name: 'Roll Royce Phantom',
      img: 'assets/images/c.png',
      location: 'Las Vegas',
      postDated: '25-11-2021',
      rentCost: 5000,
      status: 'Renting'
    },
    {
      carNumberPlate: '72B-14512',
      categoryId: 1,
      name: 'Lamboghini Aventador A1',
      img: 'assets/images/e.png',
      location: 'Las Vegas',
      postDated: '25-11-2021',
      rentCost: 5000,
      status: 'Renting'
    },
    {
      carNumberPlate: '72B-14512',
      categoryId: 1,
      name: 'Benley G142 RI',
      img: 'assets/images/g.png',
      location: 'Las Vegas',
      postDated: '25-11-2021',
      rentCost: 5000,
      status: 'Renting'
    },
  ];
  websiteDevelopLists = [];
  p = 1;

  constructor() { }

  ngOnInit() {
    this.getAllGraphicList();
  }

  getAllGraphicList = () => {

  }

}
