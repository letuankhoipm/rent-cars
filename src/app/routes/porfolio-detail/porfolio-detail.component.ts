import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-porfolio-detail',
  templateUrl: './porfolio-detail.component.html',
  styleUrls: ['./porfolio-detail.component.scss'],
  providers: []
})
export class PorfolioDetailComponent implements OnInit {

  public background = 'assets/images/work.jpg';
  platforms = [];
  id: any;
  listWorks: any;
  // cardDetail: any;
  cardDetail = {
    carNumberPlate: '72B-14512',
    categoryId: 1,
    name: 'Roll Royce Phantom',
    img: 'assets/images/c.png',
    location: 'Las Vegas',
    postDated: '25-11-2021',
    rentCost: 5000,
    status: 'Renting'
  };
  listImages: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

  }

}
