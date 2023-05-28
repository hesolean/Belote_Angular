import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";
import { EquipeService } from "./team.service";

@Injectable({
    providedIn: 'root'
})
export class ComptePointService {
    equipe: EquipesModel[] = [];
    equipe10Der!: number;

    constructor(private teamService: EquipeService) {}

    /**
   * Je récupère les informations des équipes
   */
    getEquipe = () => {
        this.equipe = this.teamService.equipes;
    }

    /**
     * je récupère l'id de l'équipe qui va recevoir le 10 de der
     * @param id id equipe
     */
    setEquipe10Der = (id: number) => {
        this.equipe10Der = id;
        console.log("l'équipe sélectionnée pour 10 de der est : "+this.equipe10Der);
    }
    
    /**
     * méthode qui permet d'ajouter des points à une équipe lors de la définition de la partie
     * @param idEquipes id de l'équipe qui reçoit les points
     */
    onAddPoint10Der = (equipe10Der: number) => {
        
    }

    onRemovepoint(points: number, equipe: EquipesModel){

    }

    /**
     * autoriser l'ajout des points du plie à chaque équipe
     */
    onAddPointTotal = () => {
        this.onAddPoint10Der(this.equipe10Der);
    }
}