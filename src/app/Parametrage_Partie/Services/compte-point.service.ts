import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";
import { EquipeService } from "./team.service";

@Injectable({
    providedIn: 'root'
})
export class ComptePointService {
    private _pointsEquipe0: Array<number> = new Array();
    private _pointsEquipe1: Array<number> = new Array();


    equipes: EquipesModel[] = [new EquipesModel('')];
    pointsPlieEquipe0: number = 0;
    pointsPlieEquipe1: number = 0;
    
    preneur!: number;
    
    capot!: string;
    
    equipe10Der!: number;
    
    equipeCompte!: number;
    pointsEquipeCompte!: number;

    constructor(private teamService: EquipeService) {}
    /**
     * getteurs
     */
    get pointsEquipe0(): Array<number> {
        return this._pointsEquipe0
    }
    get pointsEquipe1(): Array<number> {
        return this._pointsEquipe1
    }
    /**
   * Je récupère les informations des équipes
   */
    getEquipe = () => {
        this.equipes = this.teamService.equipes;
    }

    /**
     * je récupère l'équipe qui a pris
     * @param id id équipe
     */
    setPreneur = (id: number) => {
        this.preneur = id;
        console.log("le preneur est : "+this.preneur);
    }

    setCapot = (type: string) => {
        this.capot = type;
        console.log("type de cpaot : "+ this.capot);
        
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
     * @param equipe10Der id de l'équipe qui reçoit les points
     */
    onAddPoint10Der = (equipe10Der: number) => {
        if (equipe10Der == 0) {
            this.pointsPlieEquipe0 += 10
            console.log("equipe 0 resoit 10 de der " +this.pointsPlieEquipe0);
        }
        if (equipe10Der == 1) {
            this.pointsPlieEquipe1 += 10
            console.log("equipe 1 resoit 10 de der "+this._pointsEquipe1);            
        }        
    }

 
    /**
     * autoriser l'ajout des points du plie à chaque équipe
     */
    onAddPointTotal = () => {
        this.onAddPoint10Der(this.equipe10Der);
        this._pointsEquipe0.push(this.pointsPlieEquipe0);
        this._pointsEquipe1.push(this.pointsPlieEquipe1);
        console.log("total points eq 0 " +this._pointsEquipe0);
        console.log("total points eq 1 " +this._pointsEquipe1);
        this.pointsPlieEquipe0 = 0;
        this.pointsPlieEquipe1 = 0;

    }
}