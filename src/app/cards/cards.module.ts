import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CardsRoutingModule } from './cards-routing.module';
import { TypeListComponent } from './type-list/type-list.component';


@NgModule({
  declarations: [
    CardsComponent, 
    CardListComponent, 
    CardComponent, 
    HeaderComponent, 
    TypeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
