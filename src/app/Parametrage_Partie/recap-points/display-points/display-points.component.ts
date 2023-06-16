import { Component, OnInit } from '@angular/core';
import EquipesModel from '../../models/EquipesModel';
import { EquipeService } from '../../services/team.service';

@Component({
  selector: 'app-display-points',
  templateUrl: './display-points.component.html',
  styleUrls: ['./display-points.component.css']
})
export class DisplayPointsComponent implements OnInit{

  equipes: EquipesModel[] = [];
  
  constructor(private teamService: EquipeService){}

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
