import { Component } from '@angular/core';
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

  // bouleans d'ouverture et fermeture des modales
  equipeComponent: boolean = false;
  partieComponent: boolean = false;
  afficheTableau: boolean = false;
  afficheDefPlie: boolean = false;
  plieComponent: boolean = false;
  
  // je donne le nom au bouton
  btnEquipe: string = "Créer les équipes";
  btnPartie: string = "Définir la partie";
  btnPlie: string = "Nouveau plie";

constructor(private modaleService: ModaleService) {}
  
  ngOnInit(){
    this.subscription = this.modaleService.equipeComponent.subscribe(
      (bool:boolean) => {
        this.equipeComponent = bool;//j'affecte la nouvelle valeur de boolean captée
      }
    )

    this.subscription = this.modaleService.partieComponent.subscribe(
      (bool:boolean) => {
        this.partieComponent = bool;
      }
    )

    this.subscription = this.modaleService.afficheDefPlie.subscribe(
      (bool:boolean) => {
        this.afficheDefPlie = bool;
      }
    )

    this.subscription = this.modaleService.afficheTableau.subscribe(
      (bool:boolean) => {
        this.afficheTableau = bool;
      }
    )

    this.subscription = this.modaleService.plieComponent.subscribe(
      (bool:boolean) => {
        this.plieComponent = bool;
      }
    )
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }

  // affichage des modales
  openAddTeam = () => {
    this.equipeComponent = true;  
  }
  openAddPartie = () => {
    this.partieComponent = true;
  }
  openAddPlie = () => {
    this.plieComponent = true;
  }
}
