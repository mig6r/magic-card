import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { FooComponent } from '../foo/foo.component';

@NgModule({
  declarations: [
    BarComponent,
    FooComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent
  ]
})
export class BarModule { }
