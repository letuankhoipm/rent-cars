import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SignInComponent
  ],
  entryComponents: [SignInComponent]
})
export class SignInModule { }
