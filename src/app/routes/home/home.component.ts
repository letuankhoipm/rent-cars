import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHidden = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = false;
    }, 3000)
  }


}
