import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListWorkComponent implements OnInit {

  constructor() { }

  public workCards = [
    {
      img: 'assets/images/deluxe.png',
      title: 'De Luxe',
      tech: 'Angular 6',
      descript: 'De Luxe is an musical demonstration website with the famous classic of Vivaldi - Four Season'
    },
    {
      img: 'assets/images/phimdee.png',
      title: 'Phim Dee',
      tech: 'Angular 6',
      descript: 'The PhimDee the world of leading internet entertainment service with 158 million paid memberships in over 190 countries enjoying TV series, documentaries and film'
    },
    {
      img: 'assets/images/ludus.png',
      title: 'Ludus',
      tech: 'Angular 6',
      descript: 'The Ludus Warriors App allows you to objectively track and analyse your martial arts performance when used together with the CS-Paddle and Ludus ID Wristband.'
    },
    {
      img: 'assets/images/phuongbinh.png',
      title: 'Phuong Binh Tourist',
      tech: 'Angular 6',
      descript: 'Phuong Binh Tourist - Professional tourism organizer. phuongbinhtourist.com website is proud to be the No. 1 online tour sales network in Vietnam.'
    },
    {
      img: 'assets/images/hosiana.png',
      title: 'Hosiana',
      tech: 'Angular 5',
      descript: 'A real-estate web app, to looking for new home or offers a diverse range of attractive properties to rent or buy. '
    },
    {
      img: 'assets/images/harvee.png',
      title: 'Harvee',
      tech: 'React JS',
      descript: 'Harvee is an application that was meant to students to take online classes and for teachers to teach those classes.'
    },
    {
      img: 'assets/images/nhanviet.png',
      title: 'Nhan Viet Medical',
      tech: 'Angular 7',
      descript: 'Nhanviet is an application that was meant to students to take online classes and for teachers to teach those classes.'
    },
    {
      img: 'assets/images/tele.png',
      title: 'Aspi Korean',
      tech: 'Angular 5',
      descript: 'Telephone Store is an application that was meant to students to take online classes and for teachers to teach those classes.'
    },
  ]

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
