import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public ltkLogo = 'assets/logo/tuankhoilogo.png';
  public wooden = 'assets/images/wooden.png';

  ngOnInit() {
  }

}
