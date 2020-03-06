import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input('card') card: any;
  @Input('isHidden') isHidden: boolean;
  public platforms: any;

  constructor() { }

  ngOnInit() {
    this.platforms = this.card.platform;
  }

}
