import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";
import { EquipeService } from "./team.service";

@Injectable({
    providedIn: 'root'
})
export class ComptePointService {
    equipes: EquipesModel[] = [new EquipesModel('',0, 0, 0)];
    has10DeDer!: number;
    equipe10Der!: number;

    constructor(private teamService: EquipeService) {}

    /**
   * Je récupère les informations des équipes
   */
    getEquipe = () => {
        this.equipes = this.teamService.equipes;
    }

    /**
     * je récupère l'id de l'équipe qui va recevoir le 10 de der
     * @param id id equipe
     */
    setEquipe10Der = (id: number) => {
        this.equipe10Der = id;
        console.log("l'équipe sélectionnée pour 10 de der est : "+this.equipe10Der);  
    }
    
    setHas10DeDer = () => {
    this.has10DeDer = 10;
    }
    /**
     * méthode qui permet d'ajouter des points à une équipe lors de la définition de la partie
     * @param equipe10Der id de l'équipe qui reçoit les points
     */
    onAddPoint10Der = (equipe10Der: number) => {
        const result = this.equipes.find(x => x.idEquipes == equipe10Der);
        this.setEquipe10Der;
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