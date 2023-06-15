import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import EquipesModel from '../../models/EquipesModel';
import { EquipeService } from '../../services/team.service';
import { ComptePointService } from '../../services/compte-point.service';


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
  // je récupère les données de la team dans le tableau d'équipes
  equipes: EquipesModel[] = [];

  // je crée un tableau pour renseigner les étiquettes des boutons chip
  availableEquipes! : Tableau[];

  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}

  ngOnInit():void {
    this.equipes = this.teamService.equipes;

     // renseignement du tableau pour les étiquettes des boutons chip
    this.availableEquipes = [
      { 
        name : this.equipes.find(item => item.idEquipes == 1)?.nomEquipe , 
        color : 'accent' 
      },
      { 
        name : this.equipes.find(item => item.idEquipes == 2)?.nomEquipe ,
        color : 'accent'
      }
      ] ;
  }  

  @Output()
  newTeamSelect: EventEmitter<number> = new EventEmitter()
  /**
   * méthode qui renvoie l'id de l'équipe sélectionnée par l'utilisateur
   * @param id id équipe sélectionnée
   */
  teamSelect(id: number): void {
    if (id == null) return;
    this.newTeamSelect.emit(id);
  }
}