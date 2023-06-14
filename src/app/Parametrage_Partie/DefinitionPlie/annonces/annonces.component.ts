import { Component } from '@angular/core';
import { Tableau } from '../der/der.component';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

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

  // boolean propre au carré de 8
  carre8Checked!: boolean;

  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}

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
        name : 'Carré de Valet' ,
        color : 'accent'
      },
      { 
        name : 'Carré de 9' ,
        color : 'accent'
      },
      { 
        name : 'Carré de As/10/R/D' ,
        color : 'accent'
      }
      ] ;    
  }
  
  /**
   * je récupère du template l'équipe belote
   * @param id id équipe
   */
  handleSelectedTeamBelote(id: number):void {
    this.comptePointService.setEquipeBelote(id);
  }

  // méthodes pour attribuer les équipes des différences annonces hors belote et carré de 8
  selectedTeamTierce(id: number):void {
    this.comptePointService.setEquipeTierce(id);
  }
  selectedTeamCinquante(id: number):void {
    this.comptePointService.setEquipeCinquante(id);
  }
  selectedTeamCent(id: number):void {
    this.comptePointService.setEquipeCent(id);
  }
  selectedTeamCarreValet(id: number):void {
    this.comptePointService.setEquipeCarreValet(id);
  }
  selectedTeamCarre9(id: number):void {
    this.comptePointService.setEquipeCarre9(id);
  }
  selectedTeamCarreAutres(id: number):void {
    this.comptePointService.setEquipeCarreAutres(id);
  }

  /**
   * en fonction de l'annonce, je concerve le ou les équipes qui ont des annonces
   * @param index de la liste des annonces
   * @param id de l'équipe sélectionnée
   */
  handleSelectedTeamsAnnonces(index: number,id: number): void {    
    if (index == 0) {
      this.selectedTeamTierce(id);      
    } else if (index == 1) {
      this.selectedTeamCinquante(id);
    } else if (index == 2) {
      this.selectedTeamCent(id);
    } else if (index == 3) {
      this.selectedTeamCarreValet(id);
    } else if (index == 4) {
      this.selectedTeamCarre9(id);
    } else if (index == 5) {
      this.selectedTeamCarreAutres(id);
    }
  }

  /**
   * méthode propre au carré de 8 qui annule toutes les annonces
   */
  handleCarre8(): void {
    this.comptePointService.onAddCarre8(this.carre8Checked);
  }
}
