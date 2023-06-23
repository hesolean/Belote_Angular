import { Injectable } from "@angular/core";
import EquipesModel from "../models/EquipesModel";
import { EquipeService } from "./team.service";
import { PartieService } from "./partie.service";
import { BehaviorSubject } from "rxjs";
import ScoreModel from "../models/ScoreModel";
import { AnnoncesService } from "./annonces.service";

@Injectable({
    providedIn: 'root'
})
export class ComptePointService {
    //tableaux de points des plis pour une partie
    private _pointsPliesEquipe0: Array<number> = new Array();
    private _pointsPliesEquipe1: Array<number> = new Array();

    // config plie : équipes et points par plie pour chaque équipe
    equipes: EquipesModel[] = [new EquipesModel('', [], [], 0, [])];
    pointsPlieEquipe0: number = 0;
    pointsPlieEquipe1: number = 0;
    
    //définition du preneur et de la couleur d'atout
    couleurAtout!: string;
    preneur!: number;
    
    //si le pli est capot
    capot!: string;
    
    //equipe qui a fait le 10 de der
    equipe10Der!: number;
    
    //équipe pour qui on a compté les points et les points obtenus
    equipeCompte!: number;
    pointsEquipeCompte: number = 0;

    // total partie
    totalEquipe0: number = this.teamService.totalEquipe(0);
    totalEquipe1: number = this.teamService.totalEquipe(1);

    //récap des scores plis
    scoresPlis: Array<ScoreModel> = Array();
    scorePlis: ScoreModel = new ScoreModel(0, '', 0, '');
    scoreEquipe0: number = 0;
    couleurAtout0: string = '';
    scoreEquipe1: number = 0;
    couleurAtout1: string = '';
    tableauScores = new BehaviorSubject<Array<ScoreModel>>(this.scoresPlis);

    // fin partie
    finPartie = new BehaviorSubject<boolean>(false);
   
    constructor(
        private teamService: EquipeService,
        private partieService: PartieService,
        private annoncesService: AnnoncesService,
        ) {}

    /**
     * getteurs
     */
    get pointsPliesEquipe0(): Array<number> {
        return this._pointsPliesEquipe0
    }
    get pointsPliesEquipe1(): Array<number> {
        return this._pointsPliesEquipe1
    }
    get getFinPartie(): BehaviorSubject<boolean> {
        return this.finPartie;
    }
    set setFinPartie(value: boolean) {
        this.finPartie.next(value);
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
     * je récupère l'atout
     * @param couleur atout sélectionné
     */
    setCouleurAtout = (couleur: string) => {
        this.couleurAtout = couleur;
        console.log("setcouleuratout : " + this.couleurAtout + " / "+couleur);
                
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
        //ajout des points pour l'équipe qui a fait capot   
        if (this.capot == "Capot") {
            if (this.preneur == 0) {
                this.pointsPlieEquipe0 += 250;                
            } else {
                this.pointsPlieEquipe1 += 250;
            }
        //ajout des points pour l'équipe qui n'est pas dedans
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
        // je remets à 0 avant de prendre la dernière valeur tapée dans l'input
        this.pointsEquipeCompte = 0; 

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

    onAddAtout(preneur: number, atout: string){
        if (preneur == 0) {
            this.couleurAtout0 = atout;
            this.couleurAtout1 = "-";
        } else {
            this.couleurAtout0 = "-",
            this.couleurAtout1 = atout
        }
        console.log("onAddAtout : " + this.couleurAtout0 + " / " + this.couleurAtout1);
        
        this.scorePlis = new ScoreModel (this.pointsPlieEquipe0,this.couleurAtout0, this.pointsPlieEquipe1, this.couleurAtout1);
        this.scoresPlis.push(this.scorePlis);
        this.tableauScores.next(this.scoresPlis);
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

        // j'ajoute les points d'annonces
        if (!this.annoncesService.equipeCarre8) {
            this.pointsPlieEquipe0 += this.annoncesService.pointsAnnoncesEquipe0;
            this.pointsPlieEquipe1 += this.annoncesService.pointsAnnoncesEquipe1;
        }        

        // j'ajoute les points du plie à chaque équipe
        this.teamService.addPointsPlies(0, this.pointsPlieEquipe0);
        this.teamService.addPointsPlies(1, this.pointsPlieEquipe1);

        // je mets à jour le total des équipes pour le pli
        this.teamService.newTotalEquipe(0, this.pointsPlieEquipe0);
        this.teamService.newTotalEquipe(1, this.pointsPlieEquipe1);

        //j'envoie les informations vers les scores
        this.onAddAtout(this.preneur, this.couleurAtout);

        //Arret de la partie
        if (this.partieService.pointsPartie <= this.teamService.totalEquipe(0)
         || this.partieService.pointsPartie <= this.teamService.totalEquipe(1)) {
            this.finPartie.next(true);             
        } else {
            this.pointsPlieEquipe0 = 0;
            this.pointsPlieEquipe1 = 0;
        }
    }

    /**
     * je passe les totaux dans le tableau des parties
     */
    onArchivesParties = () => {
        this.teamService.newArchivePartie(0, this.teamService.totalEquipe(0));
        this.teamService.newArchivePartie(1, this.teamService.totalEquipe(1));
    }
}