import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('galleryImages') galleryImages: NgxGalleryImage[];

  galleryOptions: NgxGalleryOptions[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 3,
        imageArrowsAutoHide: true,
        thumbnailsRows: 1,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 500,
        width: '100%',
        height: '600px',
        imagePercent: 60,
        thumbnailsPercent: 40,
        thumbnailsMargin: 2,
        thumbnailMargin: 2,
        thumbnailsOrder: 2
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

}
