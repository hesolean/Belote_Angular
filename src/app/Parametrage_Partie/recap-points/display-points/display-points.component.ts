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

  equipes: EquipesModel[] = [];
  finPartie!: boolean;

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
