import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListModel } from '../models/magicthegathering/card-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {

  constructor(private http: HttpClient) { }

  //on spécifie le type de retour après les deux points, ceci n'est pas obligatoire;
getCardsById(id: string) : Observable<CardListModel> {
  return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?id=${id}`);
}

getCardsByType(type: string)  : Observable<CardListModel> {
  return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?type=${type}`);
}

getCards() {
  return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards`);
}
}
