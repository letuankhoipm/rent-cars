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
  cardDetail: any;
  listImages: any;
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {

  }

}
