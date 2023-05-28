
export default class EquipesModel {
    /** fichier pour créer les modèles des équipes
     * Les attributs sont privés pour limiter l'accès.
     * On les récupère et les modifie par les getters et setters
     * le compteur est static parce qu'il est modifié dans la classe et ne sort pas de la classe
     */
    private _idEquipes: number;
    private _equipe: string;
    private _has10DeDer: number;
    private _totalPlie: number;
    private _totalPartie: number;
    private _done: boolean = false;
    private static _count: number = 1;

    /**constructeur d'un modèle */
    constructor(equipe: string,has10DeDer: number, totalPlie: number, totalPartie: number) {
        this._equipe = equipe;
        this._has10DeDer = has10DeDer;
        this._totalPlie = totalPlie;
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
    get equipe(): string {
        return this._equipe;
    }
    get has10DeDer(): number {
        return this._has10DeDer;
    }
    get totalPlie(): number {
        return this._totalPlie;
    }
    get totalPartie(): number {
        return this._totalPartie;
    }
    get done(): boolean {
        return this._done;
    }
    static get count():number {
        return this._count;
    }

    /**
     * setteurs
     */
    set equipe(value: string) {
        this._equipe = value;
    }
    set has10DeDer(value: number) {
        this._has10DeDer = value;
    }
    set totalPlie(value: number) {
        this._totalPlie = value;
    }
    set totalPartie(value: number) {
        this._totalPartie = value;
    }
    set done(value: boolean) {
        this._done = value;
    }    
}