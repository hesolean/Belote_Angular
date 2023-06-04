
export default class EquipesModel {
    /** fichier pour créer les modèles des équipes
     * Les attributs sont privés pour limiter l'accès.
     * On les récupère et les modifie par les getters et setters
     * le compteur est static parce qu'il est modifié dans la classe et ne sort pas de la classe
     */
    private _idEquipes: number;
    private _nomEquipe: string;
    private _pointsPlies: Array<number>;
    private _totalPartie: number;
    private static _count: number = 1;

    /**constructeur d'un modèle */
    constructor(nomEquipe: string, pointsplies: Array<number>, totalPartie: number) {
        this._nomEquipe = nomEquipe;
        this._pointsPlies = pointsplies;
        this._totalPartie = totalPartie;
        this._idEquipes = EquipesModel._count;
        EquipesModel._count++;
    }

    /**
     * getteurs
     */
    get idEquipes(): number {
        return this._idEquipes;
    }
    get nomEquipe(): string {
        return this._nomEquipe;
    }
    get pointsPlies(): Array<number> {
        return this._pointsPlies;
    }
    get totalPartie(): number {
        return this._totalPartie;
    }
    static get count():number {
        return this._count;
    }

    /**
     * setteurs
     */
    set nomEquipe(value: string) {
        this._nomEquipe = value;
    }
    set pointsPlies(value: Array<number>) {
        this._pointsPlies = value;
    }
    set totalPartie(value: number) {
        this._totalPartie = value;
    }
}