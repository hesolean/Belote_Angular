import { Component } from '@angular/core';
import { Tableau } from '../der/der.component';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent {
  // je récupère les données dans le tableau d'équipes
  equipes: EquipesModel[] = [];
  
  // je crée un tableau pour renseigner les étiquettes des boutons chip
  availableAnnonces! : Tableau[];

  constructor(private teamService: EquipeService) {}

  ngOnInit():void {
    // je lie le service au composant
    this.equipes = this.teamService.equipes;

    // renseignement du tableau pour les étiquettes des boutons chip
    this.availableAnnonces = [
      { 
        name : 'Tierce' , 
        color : 'accent' 
      },
      { 
        name : 'Cinquante' ,
        color : 'accent'
      },
      { 
        name : 'Cent' ,
        color : 'accent'
      },
      { 
        name : 'Carré' ,
        color : 'accent'
      }
      ] ;
  }  
}
