
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartieService } from '../services/partie.service';
import { ModaleService } from '../services/modale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-definition-partie',
  templateUrl: './definition-partie.component.html',
  styleUrls: ['./definition-partie.component.css']
})

export class DefinitionPartieComponent implements OnInit, OnDestroy{

  // options d'affichage
  subscription!: Subscription;
  afficheTableau: boolean = false;
  afficheDefPlie: boolean = false;
  afficheAnnonces: boolean = false;
  ptsFinPartie: number = 0;

  // nom du bouton
  btnValide: string = "Valider"

  constructor(
    private partieService: PartieService,
    private modaleService: ModaleService
    ) {}

  ngOnInit( ): void {

    this.subscription = this.modaleService.afficheTableau.subscribe(
      (bool:boolean) => {
        this.afficheTableau = bool;//j'affecte la nouvelle valeur de bbolean captée
      }
    )

    this.subscription = this.modaleService.afficheDefPlie.subscribe(
      (bool:boolean) => {
        this.afficheDefPlie = bool;
      }
    )
  }

  /**
   * destruction du composant entraine l'arrêt des souscriptions
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  /**
   * je récupère les points qui mettront fin à la partie
   */
  handlePtsFinPartie(){
    this.partieService.onPtsFinPartie(this.ptsFinPartie);
  }
  
  /**
   * change les booleans pour afficher le tableau des résultats
   */
  handleValiderParam(){
    this.modaleService.setAfficheTableau = true;
    this.modaleService.setAfficheDefPlie = true;
    this.modaleService.setPartieComponent = false;
  }

  /**
   * je récupère l'information concernant l'affichage des annonces
   */
  handleAfficheAnnonces = () => {
    this.partieService.onAfficheAnnonces(this.afficheAnnonces);
  }
}
