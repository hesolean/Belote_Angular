import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';

// interface pour définir la liste des éléments à cocher
export interface Tableau {
  name: any;
  color: ThemePalette;
}
@Component({
  selector: 'app-der',
  templateUrl: './der.component.html',
  styleUrls: ['./der.component.css']
})
export class DerComponent implements OnInit{
  // je récupère les données dans le tableau d'équipes
  equipes: EquipesModel[] = [];
  availableEquipes! : Tableau[];
  constructor(private service: EquipeService) {}

  ngOnInit():void {
    this.equipes = this.service.equipes;
     // liste des éléments à cocher
    this.availableEquipes = [
      { 
        name : this.equipes.find(item => item.idEquipes == 1)?.equipe , 
        color : 'accent' 
      },
      { 
        name : this.equipes.find(item => item.idEquipes == 2)?.equipe , 
        color : 'accent' 
      }
      ] ;
  }  
}