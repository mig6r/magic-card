import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatSidenavModule,
MatListModule,
MatCardModule,
MatProgressSpinnerModule,
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,

  ]
})
export class MaterialModule { }
