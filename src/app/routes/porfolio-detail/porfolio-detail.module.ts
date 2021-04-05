import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioDetailComponent } from './porfolio-detail.component';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { ListWorkModule } from 'src/app/components/list-work/list-work.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PorfolioDetailComponent],
  imports: [
    CommonModule,
    HeadingModule,
    GalleryModule,
    ListWorkModule,
    RouterModule
  ],
  exports: [
    PorfolioDetailComponent
  ]
})
export class PorfolioDetailModule { }
