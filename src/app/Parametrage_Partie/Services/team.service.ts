import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";

@Injectable({
    providedIn: 'root'
})
export class EquipeService {
    // définition du tableau pour les équipes en s'appuyant sur le model
    private _equipes: EquipesModel[] = [
        // pour l'instant j'incrémente en dur 2 valeurs pour développer
        new EquipesModel("equipe 1", [], [], 0, []),
        new EquipesModel("equipe 2", [], [], 0, [])
    ]

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
        this._equipes.push(equipe);
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