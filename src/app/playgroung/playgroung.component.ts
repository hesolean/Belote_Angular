import { Component } from '@angular/core';
import { ComptePointService } from '../Parametrage_Partie/services/compte-point.service';
import { ModaleService } from '../Parametrage_Partie/services/modale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playgroung',
  templateUrl: './playgroung.component.html',
  styleUrls: ['./playgroung.component.css']
})
export class PlaygroungComponent {
  title = 'belote_angular';

  subscription!: Subscription;

  // bouleans d'ouverture et fermeture des modales
  equipeComponent: boolean = false;
  partieComponent: boolean = false;
  afficheTableau: boolean = false;
  afficheDefPlie: boolean = false;
  plieComponent: boolean = false;
  finPartie: boolean = false;
  
  // je donne le nom au bouton
  btnEquipe: string = "Créer les équipes";
  btnPartie: string = "Définir la partie";
  btnPlie: string = "Nouveau plie";
  btnEnregistrePartie: string = "Enregistrer la partie";

constructor(
  private modaleService: ModaleService,
  private comptePointService: ComptePointService
  ) {}
  
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

    this.subscription = this.comptePointService.finPartie.subscribe(
      (bool:boolean) => {
        this.finPartie = bool;//j'affecte la nouvelle valeur de boolean captée
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
  enregistrePartie = () => {
    this.comptePointService.onArchivesParties();
    this.comptePointService.finPartie.next(false);
    this.comptePointService.resetPlie();
  }
}
