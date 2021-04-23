import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { Route, RouterModule } from '@angular/router';
import { HeadingModule } from 'src/app/components/heading/heading.module';

const routes: Route[] = [
  {
    path: "",
    component: CarsComponent
  }
]

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    HeadingModule,
    RouterModule.forChild(routes),
  ]
})
export class CarsModule { }
