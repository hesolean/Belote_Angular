
export default class EquipesModel {
    /** fichier pour créer les modèles des équipes
     * Les attributs sont privés pour limiter l'accès.
     * On les récupère et les modifie par les getters et setters
     * le compteur est static parce qu'il est modifié dans la classe et ne sort pas de la classe
     */
    private _idEquipes: number;
    private _equipe: string;
    private _done: boolean = false;
    private static _count: number = 1;

    /**constructeur d'un modèle */
    constructor(equipe: string) {
        this._equipe = equipe;
        this._idEquipes = EquipesModel._count;
        EquipesModel._count++;
    }

    get idEquipes(): number {
        return this._idEquipes;
    }

    get equipe(): string {
        return this._equipe;
    }

    get done(): boolean {
        return this._done;
    }

    set equipe(value: string) {
        this._equipe = value;
    }
    set done(value: boolean) {
        this._done = value;
    }

    static get count():number {
        return this._count;
    }
}