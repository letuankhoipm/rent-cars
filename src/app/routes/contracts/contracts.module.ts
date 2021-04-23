import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts.component';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: ContractsComponent
  }
]

@NgModule({
  declarations: [ContractsComponent],
  imports: [
    CommonModule,
    HeadingModule
  ],
  exports: [
    ContractsComponent
  ]
})
export class ContractsModule { }
