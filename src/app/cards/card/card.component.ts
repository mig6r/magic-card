import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CardListModel } from '../../shared/models/magicthegathering/card-list.model';
import { CardModel } from '../../shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  
  @Input() id: string;
  public card: CardModel;

 
  
  constructor(private MagicTheGatheringService: MagicTheGatheringService, private router:Router) {

       }

  ngOnInit() {}

  ngOnChanges(){
    if(this.id){
  this.MagicTheGatheringService.getCardsById(this.id).subscribe(
    (data: CardListModel) => {
      if (!data.cards[0]){
        this.router.navigate(['/cards','notFind']);
        console.log("non trouvé");
      }
      this.id = `Détails pour : [ ${data.cards[0].name} ]`;
        this.card = data.cards[0];
        
     
      
    },
    () => {}

  );
}
}


}
