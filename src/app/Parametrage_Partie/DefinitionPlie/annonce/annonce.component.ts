import { Component, OnInit } from '@angular/core';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  // je récupère les données dans le tableau d'équipes
  equipes: EquipesModel[] = [];
  
  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}

  /**
   * je lie le service au composant
   */
  ngOnInit():void {
    this.equipes = this.teamService.equipes;}
}
