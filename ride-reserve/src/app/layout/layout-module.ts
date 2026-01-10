import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayout } from './public-layout/public-layout';
import { SecureLayout } from './secure-layout/secure-layout';



@NgModule({
  declarations: [
    PublicLayout,
    SecureLayout
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
