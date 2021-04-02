import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class ListWorkComponent implements OnInit {

  constructor() { }
  hidden = true;

  public workCards: any;

  public customOptions: any = {
    margin: 20,
    loop: true,
    dots: false,
    center: true,
    slideBy: 1,
    autoplay: false,
    nav: true,
    navClass: ['owl-prev', 'owl-next'],
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      660: {
        items: 2
      },
      920: {
        items: 3
      },
    }
  };

  ngOnInit() {

  }

}
