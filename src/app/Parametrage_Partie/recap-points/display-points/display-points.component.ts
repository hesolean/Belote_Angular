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

  constructor(private teamService: EquipeService, private comptePointService: ComptePointService){}

  ngOnInit(): void {
    this.getEquipe();
  }

  /**
   * Je récupère les informations des équipes
   */
  getEquipe = () => {
    this.equipes = this.teamService.equipes;
  }
}
