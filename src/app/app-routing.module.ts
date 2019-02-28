import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [

  { path: "foo", component: FooComponent },
  { path: "foo/:id", component: FooComponent },
 { path: "**", component: FooComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
