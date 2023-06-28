import { Injectable } from "@angular/core";
import EquipesModel from "../models/EquipesModel";
import { EquipeService } from "./team.service";
import { PartieService } from "./partie.service";
import { BehaviorSubject } from "rxjs";
import ScoreModel from "../models/ScoreModel";

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
    pointsBeloteEquipe0: number = 0;
    pointsBeloteEquipe1: number = 0;
    pointsAtoutEquipe0: number = 0;
    pointsAtoutEquipe1: number = 0;
    totalPli: number = 0;
    
    //définition du preneur et de la couleur d'atout
    couleurAtout!: string;
    preneur!: number;
    
    //si le pli est capot
    //capot!: string;
    equipe0Capot!: boolean;
    equipe1Capot!: boolean;
    equipe0Dedans!: boolean;
    equipe1Dedans!: boolean;
    equipe0Gagne!: boolean;
    equipe1Gagne!: boolean;
    
    //equipe qui a fait le 10 de der
    equipe10Der!: number;
    
    //équipe pour qui on a compté les points et les points obtenus
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
    equipeCarre8: boolean = false;

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
    }

    onAddAtout(preneur: number, atout: string){
        if (preneur == 0) {
            this.couleurAtout0 = atout;
            this.couleurAtout1 = "-";
        } else {
            this.couleurAtout0 = "-",
            this.couleurAtout1 = atout
        }        
        this.scorePlis = new ScoreModel (this.pointsPlieEquipe0,this.couleurAtout0, this.pointsPlieEquipe1, this.couleurAtout1);
        this.scoresPlis.push(this.scorePlis);
        this.tableauScores.next(this.scoresPlis);
    }

    /**
     *  je récupère le type de capot pour le calcul des points plus tard
     * @param type type de capot
     */
    // setCapot = (type: string) => {
    //     this.capot = type;     
    // }

    /**
     * attribut les points si capot ou dedans
     * @param capot type de capot
     * @param preneur id équipe qui a pris
     */
    // onAddPointCapot = () => {     
    //     //ajout des points pour l'équipe qui a fait capot   
    //     if (this.capot == "Capot") {
    //         if (this.preneur == 0) {
    //             this.pointsPlieEquipe0 += 250;                
    //         } else {
    //             this.pointsPlieEquipe1 += 250;
    //         }
    //     //ajout des points pour l'équipe qui n'est pas dedans
    //     } else if (this.capot == "Dedans") {
    //         if (this.preneur == 0) {
    //             this.pointsPlieEquipe1 += 160;
    //         } else {
    //             this.pointsPlieEquipe0 += 160;
    //         }
    //     }
    // }

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
            this.pointsPlieEquipe1 += 152-this.pointsEquipeCompte;            
        }
        if (this.equipeCompte == 1) {
            this.pointsPlieEquipe1 += this.pointsEquipeCompte;
            this.pointsPlieEquipe0 += 152-this.pointsEquipeCompte;
        }
        console.log("eq0 : " + this.pointsPlieEquipe0 + " / eq1 : " + this.pointsPlieEquipe1);
            
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
        this.equipeCarre8 = carre8Checked;              
    }

    /**
     * les points de belote sont imprenables donc on les ajoute à part
     */
    onAddPointsBelote(){
        if (this.equipeBelote == 0) {
            this.pointsBeloteEquipe0 += 20;
        } else if (this.equipeBelote == 1) {
            this.pointsBeloteEquipe1 += 20;
        }   
    }
    onAddPointsAtout(){
        if (!this.equipeCarre8) {
            if (this.equipeTierce == 0) {
                this.pointsAtoutEquipe0 += 20
            } else if (this.equipeTierce == 1) {
                this.pointsAtoutEquipe1 += 20                
            }

            if (this.equipeCinquante == 0) {
                this.pointsAtoutEquipe0 += 50
            } else if (this.equipeCinquante == 1) {
                this.pointsAtoutEquipe1 += 50
            }

            if (this.equipeCent == 0) {
                this.pointsAtoutEquipe0 += 100
            } else if (this.equipeCent == 1) {
                this.pointsAtoutEquipe1 += 100
            }  

            if (this.equipeCarreValet == 0) {
                this.pointsAtoutEquipe0 += 200
            } else if (this.equipeCarreValet == 1) {
                this.pointsAtoutEquipe1 += 200
            }   
            
            if (this.equipeCarre9 == 0) {
                this.pointsAtoutEquipe0 += 150
            } else if (this.equipeCarre9 == 1) {
                this.pointsAtoutEquipe1 += 150
            } 

            if (this.equipeCarreAutres == 0) {
                this.pointsAtoutEquipe0 += 100
            } else if (this.equipeCarreAutres == 1) {
                this.pointsAtoutEquipe1 += 100
            }             
        }
    }

    /**
     * répartition des points en fonction des cas de capot ou de chute
     */
    repartitionPoints(){
        // une équipe est capot
        if (this.pointsPlieEquipe0 == 0) {
            this.equipe0Capot = true;
            this.equipe1Capot = false;
            this.pointsPlieEquipe0 = this.pointsBeloteEquipe0;
            this.pointsPlieEquipe1 = 252 + this.pointsBeloteEquipe1 + this.pointsAtoutEquipe1; 
        } else if (this.pointsPlieEquipe1 == 0) {
            this.equipe0Capot = false;
            this.equipe1Capot = true;
            this.pointsPlieEquipe0 = 252 + this.pointsBeloteEquipe0 + this.pointsAtoutEquipe0;
            this.pointsAtoutEquipe1 = this.pointsBeloteEquipe1;
        } else 

        // une equipe chute
        if (this.preneur == 0 && this.pointsPlieEquipe0 <= 81){
            this.equipe0Dedans = true;
            this.equipe1Dedans = false;
            this.pointsPlieEquipe0 = this.pointsBeloteEquipe0;
            this.pointsPlieEquipe1 = 162 + this.pointsBeloteEquipe1 + this.pointsAtoutEquipe1;
        } else if (this.preneur == 1 && this.pointsPlieEquipe1 <= 81) {
            this.equipe1Dedans = true;
            this.equipe0Dedans = false;
            this.pointsPlieEquipe1 = this.pointsBeloteEquipe1;
            this.pointsPlieEquipe0 = 162 + this.pointsBeloteEquipe0 + this.pointsAtoutEquipe0;
        } else {
            // autres cas
            this.pointsPlieEquipe0 += this.pointsAtoutEquipe0 + this.pointsBeloteEquipe0;
            this.pointsPlieEquipe1 += this.pointsAtoutEquipe1 + this.pointsBeloteEquipe1;
        }
    }
    
    /**
     * détermine le gagnant du pli
     */
    gagnant(){
        if (this.pointsPlieEquipe0 < this.totalPli){
            this.equipe0Gagne = true;
            this.equipe1Gagne = false;
        } else {
            this.equipe1Gagne = true;
            this.equipe0Gagne = false;
        }
    }

    /**
     * autoriser l'ajout des points du plie à chaque équipe
     */
    onAddPointTotal = () => {

        // j'applique la méthode de points en fonction des coches de la partie capot
        // if (this.capot == "Capot" || this.capot == "Dedans") {
        //     this.onAddPointCapot();

        // } else {
        //     this.onAddPoint10Der();
        //     this.onAddPointsComptes();
        // }

        this.onAddPoint10Der();
        this.onAddPointsComptes();

        // j'ajoute les points de belote
        this.onAddPointsBelote();

        // j'ajoute les points d'atout
        this.onAddPointsAtout();
        this.repartitionPoints();

        this.totalPli = this.pointsPlieEquipe0 + this.pointsPlieEquipe1
         + this.pointsAtoutEquipe0 + this.pointsAtoutEquipe1 
         + this.pointsBeloteEquipe0 + this.pointsBeloteEquipe1;

        this.gagnant();

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
            this.equipe10Der = 2;
            this.equipeBelote = 2;
            this.equipeTierce = 2;
            this.equipeCinquante = 2;
            this.equipeCent = 2;
            this.equipeCarreValet = 2;
            this.equipeCarre9 = 2;
            this.equipeCarreAutres = 2;
            this.equipeCarre8 = false;
            this.totalPli = 0;
            this.equipe0Capot = false;
            this.equipe0Dedans = false;
            this.equipe0Gagne = false;
            this.equipe1Capot = false;
            this.equipe1Dedans = false;
            this.equipe1Gagne = false;
        }
    }

    /**
     * je passe les totaux dans le tableau des parties
     */
    onArchivesParties = () => {
        this.teamService.newArchivePartie(0, this.teamService.totalEquipe(0));
        this.teamService.newArchivePartie(1, this.teamService.totalEquipe(1));
    }

    resetPartie(){
        this.couleurAtout = "";
        this.equipe10Der = 0;
        this.equipeCompte = 0;
        this.pointsEquipeCompte = 0;
        this.pointsPlieEquipe0 = 0;
        this.pointsPlieEquipe1 = 0;
        this.preneur = 0;
        this.scorePlis = new ScoreModel(0,"",0,"");
        this.teamService.equipes[0].totalPartie = 0;
        this.teamService.equipes[1].totalPartie = 0;
        this.scoresPlis = new Array();
        this.equipe10Der = 2;
        this.equipeBelote = 2;
        this.equipeTierce = 2;
        this.equipeCinquante = 2;
        this.equipeCent = 2;
        this.equipeCarreValet = 2;
        this.equipeCarre9 = 2;
        this.equipeCarreAutres = 2;
        this.equipeCarre8 = false;
        this.totalPli = 0;
        this.equipe0Capot = false;
        this.equipe0Dedans = false;
        this.equipe0Gagne = false;
        this.equipe1Capot = false;
        this.equipe1Dedans = false;
        this.equipe1Gagne = false;
    }
}