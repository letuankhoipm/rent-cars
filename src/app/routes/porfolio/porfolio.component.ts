import { Component, OnInit } from '@angular/core';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
  providers: [GraphService]
})
export class PorfolioComponent implements OnInit {
  websiteDesignLists: any;
  graphicDesignLists = [];
  websiteDevelopLists = [];

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
