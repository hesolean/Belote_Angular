import { Component, OnDestroy, OnInit } from '@angular/core';
import EquipesModel from '../../models/EquipesModel';
import { EquipeService } from '../../services/team.service';
import { Subscription } from 'rxjs';
import { ComptePointService } from '../../services/compte-point.service';
import ScoreModel from '../../models/ScoreModel';

@Component({
  selector: 'app-display-points',
  templateUrl: './display-points.component.html',
  styleUrls: ['./display-points.component.css']
})
export class DisplayPointsComponent implements OnInit, OnDestroy{

  //j'initie des équipes et le score du pli
  equipes: EquipesModel[] = [];
  //scoreEquipes!: ScoreModel;
  tableauScores!: Array<ScoreModel>;

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
    // this.subscription = this.comptePointService.scoreEquipes.subscribe(
    //   (recap:ScoreModel) => {
    //     this.scoreEquipes = recap;//j'affecte la nouvelle valeur de boolean captée
    //   }
    // )
    // this.tableauScores.push(this.scoreEquipes);
    this.subscription = this.comptePointService.scoreEquipes.subscribe(
      (recap:Array<ScoreModel>) => {
        this.tableauScores = recap;//j'affecte la nouvelle valeur de boolean captée
      }
    )
    // this.tableauScores.push(this.scoreEquipes);
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
