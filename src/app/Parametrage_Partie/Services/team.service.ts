import { Injectable } from "@angular/core";
import EquipesModel from "../Models/EquipesModel";

@Injectable({
    providedIn: 'root'
})
export class EquipeService {
    // définition du tableau pour les équipes en s'appuyant sur le model
    private _equipe: EquipesModel[] = [
        // pour l'instant j'incrémente en dur 2 valeurs pour développer
        new EquipesModel("equipe 1"),
        new EquipesModel("equipe 2")
    ]

    constructor() {}

    /**
     * getter : permet de récupérer les information du tableau
     */
    get equipes(): EquipesModel[]{
        return this._equipe;
    }

    /**
     * méthode qui récupère les données avec le décorateur @Output du composant addEquipe
     * @param pseudoEquipe désigne le nom de l'équipe
     */
    addEquipe = (pseudoEquipe: string) => {
        const equipe = new EquipesModel(pseudoEquipe);
        this._equipe.push(equipe);
    }    
}