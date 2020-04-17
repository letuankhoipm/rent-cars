import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHidden = true;
  test: any;

  constructor(
    public testServices: TestService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = false;
    }, 3000)   
  }


  }
