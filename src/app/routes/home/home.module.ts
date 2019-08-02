import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TextAnimateModule } from 'src/app/components/text-animate/text-animate.module';
import { IntroAnimateModule } from 'src/app/components/intro-animate/intro-animate.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TextAnimateModule,
    IntroAnimateModule
  ]
})
export class HomeModule { }
