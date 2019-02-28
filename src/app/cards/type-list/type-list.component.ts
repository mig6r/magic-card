import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypesService } from 'src/app/shared/services/types.service';

@Component({
  selector: 'my-magic-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  //un nom de variable (onTypeSelected aurait renvoyé une erreur) après EventEmitter on spécifie le type qui est emit entre chevrons
  @Output () aunTypeSelected:EventEmitter<string>;

  public types: string[];

  constructor(private typesService: TypesService) {
    this.aunTypeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.typesService.getTypes().subscribe(
     
      (data: string[])=> { this.types=data }
    );
  }

  //on déclenche le @output (écouté par cardscomponent.html)
  onClickType(clickedType:string){
    console.log(clickedType);
    this.aunTypeSelected.emit(clickedType);
  }

}
