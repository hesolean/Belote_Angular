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

    // permet de récupérer les information du tableau
    get equipes(): EquipesModel[]{
        return this._equipe;
    }

    // méthode qui récupère les données avec le décorateur @Output du composant addEquipe
    addEquipe = (pseudoEquipe: string) => {
        const equipe = new EquipesModel(pseudoEquipe);
        this._equipe.push(equipe);
    }

    // méthode pour modifier les données du tableau
    onChange = (idEquipes: number) => {
        const equipe = this._equipe.find(item => item.idEquipes == idEquipes);
        if(equipe) {
            equipe.done = !equipe.done // inverser le bouton check
        }
        
    }
}