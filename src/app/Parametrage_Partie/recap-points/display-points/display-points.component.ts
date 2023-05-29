import { Component, OnInit,Input } from '@angular/core';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-display-points',
  templateUrl: './display-points.component.html',
  styleUrls: ['./display-points.component.css']
})
export class DisplayPointsComponent implements OnInit{

  equipes: EquipesModel[] = [];
  pointsPlieEquipe0: Array<number> = [];
  pointsPlieEquipe1: Array<number> = [];

  constructor(private teamService: EquipeService, private comptePoint: ComptePointService){}

  ngOnInit(): void {
    this.getEquipe();
    this.getPointsPlis();
  }

  /**
   * Je récupère les informations des équipes
   */
  getEquipe = () => {
    this.equipes = this.teamService.equipes;
  }

  /**
   * Je récupère les points des plies
   */
  getPointsPlis = () => {
    this.pointsPlieEquipe0 = this.comptePoint.pointsEquipe0;
    this.pointsPlieEquipe1 = this.comptePoint.pointsEquipe1;
  }
}
