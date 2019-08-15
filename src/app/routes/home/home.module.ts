import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TextAnimateModule } from 'src/app/components/text-animate/text-animate.module';
import { IntroAnimateModule } from 'src/app/components/intro-animate/intro-animate.module';
import { ListWorkModule } from 'src/app/components/list-work/list-work.module';
import { BlogCarouselModule } from 'src/app/components/blog-carousel/blog-carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TextAnimateModule,
    IntroAnimateModule,
    ListWorkModule,
    BlogCarouselModule
  ]
})
export class HomeModule { }
