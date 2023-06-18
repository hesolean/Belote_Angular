import { Component, OnDestroy, OnInit } from '@angular/core';
import EquipesModel from '../../models/EquipesModel';
import { EquipeService } from '../../services/team.service';
import { Subscription } from 'rxjs';
import { ComptePointService } from '../../services/compte-point.service';

@Component({
  selector: 'app-display-points',
  templateUrl: './display-points.component.html',
  styleUrls: ['./display-points.component.css']
})
export class DisplayPointsComponent implements OnInit, OnDestroy{

  //j'initie des équipes
  equipes: EquipesModel[] = [];

  //boolean pour mener les actions de fin de partie
  finPartie!: boolean;

  //souscription pour la transmission d'informations avec le service adapté
  subscription!: Subscription;
  
  constructor(
    private teamService: EquipeService,
    private comptePointService: ComptePointService
    ){}

  ngOnInit(): void {
    this.getEquipe();

    this.subscription = this.comptePointService.finPartie.subscribe(
      (bool:boolean) => {
        this.finPartie = bool;//j'affecte la nouvelle valeur de boolean captée
      }
    )
  }

  /**
   * destruction des souscriptions à la fin du composant
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  /**
   * Je récupère les informations des équipes
   */
  getEquipe = () => {
    this.equipes = this.teamService.equipes;
  }
}
