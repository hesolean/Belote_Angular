import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComptePointService } from './Parametrage_Partie/services/compte-point.service';
import { ModaleService } from './Parametrage_Partie/services/modale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  title = 'belote_angular';

  subscription!: Subscription;

  equipeComponent: boolean = false;
  
  // je donne le nom au bouton
  btnValide: string = "Créer les équipes";

constructor(
    private comptePointsService: ComptePointService,
    private modaleService: ModaleService) {}
  
  ngOnInit(){
    this.subscription = this.modaleService.equipeComponent.subscribe(
      (bool:boolean) => {
        this.equipeComponent = bool;//j'affecte la nouvelle valeur de bbolean captée
      }
    )
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }

  openAddTeam = () => {
  this.equipeComponent = true;  
  }
}
