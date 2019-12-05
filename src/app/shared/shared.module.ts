import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],

  exports: [
    CommonModule, BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,


  ]
})
export class SharedModule { }
