import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me.routing';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    HeadingModule,
    ReactiveFormsModule,
  ]
})
export class AboutMeModule { }
