import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";
import { EquipeService } from "./team.service";
import { PartieService } from "./partie.service";

@Injectable({
    providedIn: 'root'
})
export class ComptePointService {
    private _pointsPliesEquipe0: Array<number> = new Array();
    private _pointsPliesEquipe1: Array<number> = new Array();

    // config plie
    equipes: EquipesModel[] = [new EquipesModel('', [], 0)];
    pointsPlieEquipe0: number = 0;
    pointsPlieEquipe1: number = 0;
    
    preneur!: number;
    
    capot!: string;
    
    equipe10Der!: number;
    
    equipeCompte!: number;
    pointsEquipeCompte: number = 0;

    // equipes recevant les points annonces
    equipeBelote: number = 2;
    equipeTierce: number = 2;
    equipeCinquante: number = 2;
    equipeCent: number = 2;
    equipeCarreValet: number = 2;
    equipeCarre9: number = 2;
    equipeCarreAutres: number = 2;
    equipeCarre8!: boolean;

    // total partie
    totalEquipe0: number = this.teamService.totalEquipe(0);
    totalEquipe1: number = this.teamService.totalEquipe(1);

    // fin partie
    pointsPartie!: number;    
    finPartie: boolean = false;

    constructor(
        private teamService: EquipeService,
        private partieService: PartieService) {}
    /**
     * getteurs
     */
    get pointsPliesEquipe0(): Array<number> {
        return this._pointsPliesEquipe0
    }
    get pointsPliesEquipe1(): Array<number> {
        return this._pointsPliesEquipe1
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
        }
 
    /**
     * je récupère les points du pli de l'équipe comptée
     * @param points points comptés par l'utilisateur
     */
    setPointsComptes = (points: number) => {
        this.pointsEquipeCompte = 0; // je remets à 0 avant de prendre la dernière valeur tapée dans l'input

        this.pointsEquipeCompte += points;        
    }

    /**
     * j'ajoute les points à la bonne équipe
     */
    onAddPointsComptes = () => {
        if (this.equipeCompte == 0) {
            this.pointsPlieEquipe0 += this.pointsEquipeCompte;
            this.pointsPlieEquipe1 += 150-this.pointsEquipeCompte;            
        }
        if (this.equipeCompte == 1) {
            this.pointsPlieEquipe1 += this.pointsEquipeCompte;
            this.pointsPlieEquipe0 += 150-this.pointsEquipeCompte;
        }    
    }

    /**
     * je récupère l'id de l'équipe qui va recevoir les points des annonces
     * @param id id equipe
     */
    setEquipeBelote = (id: number) => {
        this.equipeBelote = id;
    }
    setEquipeTierce = (id: number) => {        
        this.equipeTierce = id;
    }
    setEquipeCinquante = (id: number) => {
        this.equipeCinquante = id;
    }
    setEquipeCent = (id: number) => {
        this.equipeCent = id;
    }
    setEquipeCarreValet = (id: number) => {
        this.equipeCarreValet = id;
    }
    setEquipeCarre9 = (id: number) => {
        this.equipeCarre9 = id;
    }
    setEquipeCarreAutres = (id: number) => {
        this.equipeCarreAutres = id;
    }
    setEquipeCarre8 = (carre8Checked: boolean) => {        
    }

    /**
     * méthode qui permet d'ajouter des points à une équipe lors de la définition de la partie
     * @param equipe10Der id de l'équipe qui reçoit les points
     */
    onAddPointBelote = () => {
        
        if (this.equipeBelote == 0) {
            this.pointsPlieEquipe0 += 20
            
        }
        if (this.equipeBelote == 1) {
            this.pointsPlieEquipe1 += 20

        }        
    }
    onAddPointTierce = () => {
        if (this.equipeTierce == 0) {
            this.pointsPlieEquipe0 += 20

        }
        if (this.equipeTierce == 1) {
            this.pointsPlieEquipe1 += 20

        }        
    }
    onAddPointCinquante = () => {
        if (this.equipeCinquante == 0) {
            this.pointsPlieEquipe0 += 50

        }
        if (this.equipeCinquante == 1) {
            this.pointsPlieEquipe1 += 50

        }        
    }
    onAddPointCent = () => {
        if (this.equipeCent == 0) {
            this.pointsPlieEquipe0 += 100

        }
        if (this.equipeCent == 1) {
            this.pointsPlieEquipe1 += 100

        }        
    }
    onAddPointCarreValet = () => {
        if (this.equipeCarreValet == 0) {
            this.pointsPlieEquipe0 += 200

        }
        if (this.equipeCarreValet == 1) {
            this.pointsPlieEquipe1 += 200

        }        
    }
    onAddPointCarre9 = () => {
        if (this.equipeCarre9 == 0) {
            this.pointsPlieEquipe0 += 150

        }
        if (this.equipeCarre9 == 1) {
            this.pointsPlieEquipe1 += 150

        }        
    }
    onAddPointCarreAutres = () => {
        if (this.equipeCarreAutres == 0) {
            this.pointsPlieEquipe0 += 100

        }
        if (this.equipeCarreAutres == 1) {
            this.pointsPlieEquipe1 += 100

        }        
    }
    onAddCarre8 = (carre8Checked: boolean) => {
        this.equipeCarre8 = carre8Checked;
        console.log(this.equipeCarre8);
        
    }

    /**
     * autoriser l'ajout des points du plie à chaque équipe
     */
    onAddPointTotal = () => {
        // j'applique la méthode de points en fonction des coches de la partie capot
        if (this.capot == "Capot" || this.capot == "Dedans") {
            this.onAddPointCapot();

        } else {
            this.onAddPoint10Der();
            this.onAddPointsComptes();
        }
        // j'ajoute es points d'annonces
        if (!this.equipeCarre8) {
            
            this.onAddPointBelote();
            this.onAddPointTierce();
            this.onAddPointCinquante();
            this.onAddPointCent();
            this.onAddPointCarreValet();
            this.onAddPointCarre9();
            this.onAddPointCarreAutres;
        }
        

        // j'ajoute les points du plie à chaque équipe
        this.teamService.addPointsPlies(0, this.pointsPlieEquipe0);
        this.teamService.addPointsPlies(1, this.pointsPlieEquipe1);
        
        // je mets à jour le total des équipes
        this.teamService.newTotalEquipe(0, this.pointsPlieEquipe0);
        this.teamService.newTotalEquipe(1, this.pointsPlieEquipe1);

        this.pointsPartie = this.partieService.pointsPartie
        console.log("points partie" + this.pointsPartie);
        
        //Arret de la partie
        if (this.pointsPartie < this.teamService.totalEquipe(0) || this.pointsPartie < this.teamService.totalEquipe(1)) {
            this.finPartie = true;
            console.log("fin partie "+this.finPartie);
            
        } else {
            this.pointsPlieEquipe0 = 0;
            this.pointsPlieEquipe1 = 0;
        }

    }
}