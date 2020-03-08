import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService]
})
export class PorfolioComponent implements OnInit {
  websiteDesignLists: any;
  graphicDesignLists = [];
  websiteDevelopLists = [];
  p: number = 1;

  constructor(private graphServices: GraphService) { }

  ngOnInit() {
    this.getAllGraphicList();
  }

  getAllGraphicList = () => {
    this.graphServices.getAlls()
      .subscribe(result => {
        this.graphicDesignLists = result;
      })
  }

}
