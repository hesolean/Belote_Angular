import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EquipeService } from '../../services/team.service';
import { ComptePointService } from '../../services/compte-point.service';
import EquipesModel from '../../models/EquipesModel';
import { DefinitionPlieComponent } from '../definition-plie/definition-plie.component';

// interface pour définir la liste des éléments à cocher
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-capot',
  templateUrl: './capot.component.html',
  styleUrls: ['./capot.component.css']
})
export class CapotComponent implements OnInit{
  // je récupère les données de la team dans le tableau d'équipes
  equipes: EquipesModel[] = [];

  // je crée un tableau pour renseigner les étiquettes des boutons chip
  availableColors: ChipColor[] = [];
  constructor(private teamService: EquipeService, private comptePointService: ComptePointService, private definitionPlie: DefinitionPlieComponent) {}

  ngOnInit():void {
    this.equipes = this.teamService.equipes;

  // liste des éléments à cocher
  this.availableColors = [
    { name : 'Aucun' , color : 'accent' },
    { name : 'Capot' , color : 'accent' },
    { name : 'Dedans' , color : 'accent' }
  ] ;
}

  /**
   * méthode qui renvoie le type de capot sélectionnée par l'utilisateur
   * @param type type de capot sélectionnée
   */
  typeCapot(type: string): void {
    this.comptePointService.setCapot(type);
    // j'appelle la méthode du composant definitionPlie pour forcer le statut du boolean affiche
    this.definitionPlie.onChangeAffiche(type);
  }
}
