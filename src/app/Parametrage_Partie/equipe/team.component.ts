import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/team.service';
import EquipesModel from '../models/EquipesModel';
import { ComptePointService } from '../Services/compte-point.service';
import { ModaleService } from '../services/modale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class EquipeComponent implements OnInit{

  equipes: EquipesModel[] = [];
  subscription!: Subscription;
  equipeComponent: boolean = true;

  
  constructor(
    private teamService: EquipeService,
    private modaleService: ModaleService) {}

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
  handleClose = () => {
    this.modaleService.setEquipeComponent = false;
  }
}
