import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  public types: string[];

  constructor() {

    this.types = [
      "Artifact",
      "Conspiracy",
      "Creature",
      "Enchantment",
      "Instant",
      "Land",
      "Phenomenon",
      "Plane",
      "Planeswalker",
      "Scheme",
      "Sorcery",
      "Tribal",
      "Vanguard"
    ]
   }

isType(type: string): boolean{
  if (this.types.indexOf(type) === -1){
    return false;
  }; 
  return true;
}

getTypes():Observable<string[]>{
return of(this.types);
}



}
