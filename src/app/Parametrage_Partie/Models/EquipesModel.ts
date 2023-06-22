
export default class EquipesModel {
    /** fichier pour créer les modèles des équipes
     * Les attributs sont privés pour limiter l'accès.
     * On les récupère et les modifie par les getters et setters
     * le compteur est static parce qu'il est modifié dans la classe et ne sort pas de la classe
     */
    private _idEquipes: number;
    private _nomEquipe: string;
    private _pointsPlies: Array<number>;
    private _atoutPris: Array<string>;
    private _totalPartie: number;
    private static _count: number = 1;
    private _archivesParties: Array<number>;


    /**constructeur d'un modèle */
    constructor(
        nomEquipe: string,
        pointsplies: Array<number>,
        atoutPris: Array<string>,
        totalPartie: number,
        archivesParties: Array<number>
        ) {
        this._nomEquipe = nomEquipe;
        this._pointsPlies = pointsplies;
        this._atoutPris = atoutPris;
        this._totalPartie = totalPartie;
        this._archivesParties = archivesParties;
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
    get atoutPris(): Array<string> {
        return this._atoutPris;
    }
    get totalPartie(): number {
        return this._totalPartie;
    }
    get archivesParties(): Array<number> {
        return this._archivesParties;
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
    set atoutPris(value: Array<string>) {
        this._atoutPris = value;
    }
    set totalPartie(value: number) {
        this._totalPartie = value;
    }
    set archivesParties(value: Array<number>) {
        this._archivesParties = value;
    }
}