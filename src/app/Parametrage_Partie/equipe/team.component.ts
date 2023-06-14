import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../Services/team.service';
import EquipesModel from '../Models/EquipesModel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class EquipeComponent implements OnInit{

  equipes: EquipesModel[] = [];

  constructor(private teamService: EquipeService) {}

  ngOnInit():void {
    this.getEquipe();
  }

  /**
   * Je récupère les informations des équipes
   */
  getEquipe = () => {
    this.equipes = this.teamService.equipes;
  }

  /**
   * J'ajoute les équipes au tableau
   * @param e évènement écouté
   */
  handleAddEquipe = (e: string) => {
    this.teamService.addEquipe(e);    
  }  
}
