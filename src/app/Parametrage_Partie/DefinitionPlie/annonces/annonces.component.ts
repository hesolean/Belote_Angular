import { Component } from '@angular/core';
import { Tableau } from '../der/der.component';
import EquipesModel from '../../models/EquipesModel';
import { EquipeService } from '../../services/team.service';
import { ComptePointService } from '../../services/compte-point.service';

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
   * je transmets les équipes qui vont recevoir les points d'annonces
   * @param id id équipe
   */
  selectedTeamBelote(id: number):void {
    this.comptePointService.setEquipeBelote(id);
  }
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

  selectedTeamsAnnonces(index: number,id: number): void {    
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

  carre8(): void {
    this.comptePointService.onAddCarre8(this.carre8Checked);
  }
}
