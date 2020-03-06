import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioComponent } from './porfolio.component';
import { PorfolioRoutingModule } from './porfolio.routing';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { WorkCardModule } from 'src/app/components/work-card/work-card.module';
import { PorfolioDetailModule } from '../porfolio-detail/porfolio-detail.module';

@NgModule({
  declarations: [PorfolioComponent],
  imports: [
    CommonModule,
    PorfolioRoutingModule,
    GalleryModule,
    WorkCardModule,
    PorfolioDetailModule
  ]
})
export class PorfolioModule { }
