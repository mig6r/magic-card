import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  public titleApp: string;
  public theme: string;
  public query: string;
  public id : string;
  public isLoading: boolean;
 

  constructor(private activeRoute: ActivatedRoute) { 
    this.query = null;
    this.titleApp = "My Magic test";
    this.theme = "Dark";
    this.isLoading = false; 
  }
  

  hello(type: string){
    console.log("l'enfant a emit " + type);
  }

  toggleLoading(loading: boolean){
this.isLoading = loading;
  }

  ngOnInit() {

    //ecoute du changement d'url
    if (null === this.query)
    this.activeRoute.url.subscribe(
      
      ()=>{  this.query = this.activeRoute.snapshot.params["query"]; 
      
    }
    
    );
  }
  

  switchTitle(){
    this.titleApp = "Switched";
  }

}
