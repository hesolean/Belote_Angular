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
        }

    /**
     *  je récupère le type de capot pour le calcul des points plus tard
     * @param type type de capot
     */
    setCapot = (type: string) => {
        this.capot = type;     
    }

    /**
     * attribut les points si capot ou dedans
     * @param capot type de capot
     * @param preneur id équipe qui a pris
     */
    onAddPointCapot = () => {        
        if (this.capot == "Capot") {
            if (this.preneur == 0) {
                this.pointsPlieEquipe0 += 250;                
            } else {
                this.pointsPlieEquipe1 += 250;
            }
        } else if (this.capot == "Dedans") {
            if (this.preneur == 0) {
                this.pointsPlieEquipe1 += 160;
            } else {
                this.pointsPlieEquipe0 += 160;
            }
        }
    }

    /**
     * je récupère l'id de l'équipe qui va recevoir le 10 de der
     * @param id id equipe
     */
    setEquipe10Der = (id: number) => {
        this.equipe10Der = id;
    }
    
    /**
     * méthode qui permet d'ajouter des points à une équipe lors de la définition de la partie
     * @param equipe10Der id de l'équipe qui reçoit les points
     */
    onAddPoint10Der = () => {
        if (this.equipe10Der == 0) {
            this.pointsPlieEquipe0 += 10
        }
        if (this.equipe10Der == 1) {
            this.pointsPlieEquipe1 += 10
        }        
    }

    /**
     * je récupère l'équipe qui récupère les points comptés
     * @param id id équipe
     */
    setEquipePointsComptes = (id: number) => {
        this.equipeCompte = id;
        console.log("équipe comptée " + this.equipeCompte);
        
        }
 
        /**
         * je récupère les points du pli de l'équipe comptée
         * @param points points comptés par l'utilisateur
         */
    setPointsComptes = (points: number) => {
        this.pointsEquipeCompte = points;
        console.log("points comptée " + this.pointsEquipeCompte);

    }
    onAddPointsComptes = () => {
        if (this.equipeCompte == 0) {
            this.pointsPlieEquipe0 += this.pointsEquipeCompte;
        }
        if (this.equipeCompte == 1) {
            this.pointsPlieEquipe1 += this.pointsEquipeCompte;
        }    
    }
    /**
     * autoriser l'ajout des points du plie à chaque équipe
     */
    onAddPointTotal = () => {
        if (this.capot == "Capot" || this.capot == "Dedans") {
            this.onAddPointCapot();
        } else {
            this.onAddPoint10Der();
            this.onAddPointsComptes();
        }
        
        this._pointsEquipe0.push(this.pointsPlieEquipe0);
        this._pointsEquipe1.push(this.pointsPlieEquipe1);
        console.log("total points eq 0 " +this._pointsEquipe0);
        console.log("total points eq 1 " +this._pointsEquipe1);
        this.pointsPlieEquipe0 = 0;
        this.pointsPlieEquipe1 = 0;

    }
}