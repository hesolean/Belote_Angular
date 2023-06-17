import { Injectable } from "@angular/core";
import EquipesModel from "../models/EquipesModel";

@Injectable({
    providedIn: 'root'
})
export class EquipeService {
    // définition du tableau pour les équipes en s'appuyant sur le model
    private _equipes: EquipesModel[] = [
        // pour l'instant j'incrémente en dur 2 valeurs pour développer
        new EquipesModel("", [], [], 0, []),
        new EquipesModel("", [], [], 0, [])
    ]

    private numEquipe: number = 0;

    constructor() {}

    /**
     * getter : permet de récupérer les information du tableau
     */
    get equipes(): EquipesModel[]{
        return this._equipes;
    }

    /**
     * méthode qui récupère les données avec le décorateur @Output du composant addEquipe
     * @param pseudoEquipe désigne le nom de l'équipe
     */
    addEquipe = (pseudoEquipe: string) => {
        const equipe = new EquipesModel(pseudoEquipe, [], [], 0, []);        
        this._equipes.splice(this.numEquipe,1,equipe);
        console.log(this._equipes[this.numEquipe]);
        
        this.numEquipe ++;
    }

    addPointsPlies(index: number, points: number) {
        this._equipes[index].pointsPlies.push(points);
    }

    pointsPlies(index: number) {
        return this._equipes[index].pointsPlies;
    }

    totalEquipe(index: number) {
        return this._equipes[index].totalPartie
    }

    newTotalEquipe(index: number, points: number) {
        this._equipes[index].totalPartie += points; 
    }

    newArchivePartie(index: number, points: number) {
        this._equipes[index].archivesParties.push(points); 
    }
}