import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListModel } from '../../shared/models/magicthegathering/card-list.model';
import { CardModel } from '../../shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

@Input() type: string;
 public cards: CardModel[];
 @Output () onBeforeCards : EventEmitter<string>;
 @Output () onLoadCards : EventEmitter<string>;
 

  constructor(   
    private MagicTheGatheringService: MagicTheGatheringService,
    private typeService:TypesService, 
    private router: Router,
     ) {
    this.onBeforeCards = new EventEmitter(true);
    this.onLoadCards = new EventEmitter(true);
this.cards = [];
   }
   

  ngOnInit() {}

  ngOnChanges(){

   
    if(!this.typeService.isType(this.type) && this.type && "notFind" !== this.type){
console.log("redirection");
this.router.navigate(['/cards']);
return;

    }
    if(!this.type || "notFind" === this.type){
      
      if("notFind" === this.type){
      this.type = "La carte demandée n'a pas été trouvée";
    }
    if(!this.type){
      this.type = "Liste des cartes";
    }
      this.loadAllCards();
      return;
    }
    
    this.loadCards();
  }

  loadCards() {
    this.onBeforeCards.emit();
    this.MagicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => { 
        this.cards = data.cards;
        this.onLoadCards.emit();
      },
      
      () => {}
    );
}

loadAllCards() {
  this.onBeforeCards.emit();
  this.MagicTheGatheringService.getCards().subscribe(
    
    (data: CardListModel) => { this.cards = data.cards;this.onLoadCards.emit();},
  
    () => {}
  );
}

}
