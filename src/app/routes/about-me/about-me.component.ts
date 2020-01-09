import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  edus = [
    {
      job: 'DB Analysic',
      uni: 'UIT VNU',
      nation: 'Vietnam',
      content: 'Accomplished website developer and information system with 2 years of experience in development of Website applications.',
      years: '2017-22'
    },
    {
      job: 'Design',
      uni: 'Tokyo Homing',
      nation: 'Japan',
      content: 'Accomplished design and UI/UX with 2 month training in Japan.',
      years: '2018-19'
    },
  ];

  exps = [
    {
      job: 'web developer',
      nation: 'Vietnam',
      years: '2017-2018',
      content: 'Accomplished website developer with 2 years of experience in development of Website applications.'
    },
    {
      job: 'designer',
      nation: 'Vietnam',
      years: '2017-2018',
      content: 'Accomplished design with 2 years of experience in Photoshop.'
    },
    {
      job: 'infor sys engineer',
      nation: 'Vietnam',
      years: '2017-2022',
      content: 'Accomplished information system with 2 years of experience in development of Website applications.'
    },
    {
      job: 'design assistant',
      nation: 'Vietnam',
      years: '2016-2017',
      content: 'Assistant design and support design at Ai and Pts section.'
    },
  ]

  hobbies = [
    {
      icon: '<i class="fas fa-gamepad"></i>',
      name: 'Game'
    },
    {
      icon: '<i class="fas fa-music"></i>',
      name: 'Music'
    },
    {
      icon: '<i class="fas fa-futbol"></i>',
      name: 'Sports'
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
  ]

}
