import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { ListWorkComponent } from './list-work.component';
import { WorkCardModule } from '../work-card/work-card.module';

@NgModule({
  declarations: [ListWorkComponent],
  imports: [
    CommonModule,
    OwlModule,
    WorkCardModule
  ],
  exports: [ListWorkComponent]
})
export class ListWorkModule { }
