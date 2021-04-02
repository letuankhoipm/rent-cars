import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: [UserService]
})
export class AboutMeComponent implements OnInit {

  constructor(private userService: UserService) { }
  edus = [];
  exps = [];
  skills = [];
  langs = [];
  user: any;
  hobbies = [
    {
      icon: '<i class="fas fa-gamepad"></i>',
      name: 'Game'
    },
    {
      icon: '<i class="fas fa-music"></i>',
      name: 'Guitar'
    },
    {
      icon: '<i class="fas fa-futbol"></i>',
      name: 'Soccer'
    },
    {
      icon: `<i class="fas fa-book"></i>`,
      name: 'Reading'
    },
    {
      icon: '<i class="fas fa-pencil-ruler"></i>',
      name: 'Drawing'
    },
    {
      icon: '<i class="fas fa-palette"></i>',
      name: 'Design'
    },
  ];

  ngOnInit() {
    this.getUser();
  }

  getUser = () => {

  }

}
