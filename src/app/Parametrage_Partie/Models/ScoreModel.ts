export default class EquipesModel {
    /** fichier pour créer les modèles de score
     * Les attributs sont privés pour limiter l'accès.
     * On les récupère et les modifie par les getters et setters
     */
    private _pointPli0: number;
    private _couleurPli0: string;
    private _pointPli1: number;
    private _couleurPli1: string;

    constructor(scoreEquipe0: number, couleurAtout0: string, scoreEquipe1: number, couleurAtout1: string) {
        this._pointPli0 = scoreEquipe0;
        this._couleurPli0 = couleurAtout0;
        this._pointPli1 = scoreEquipe1;
        this._couleurPli1 = couleurAtout1;
    }

    /**
     * getteurs
     */
    get scoreEquipe0(): number {
        return this._pointPli0;
    }
    get couleurAtout0(): string {
        return this._couleurPli0;
    }
    get scoreEquipe1(): number {
        return this._pointPli1;
    }
    get couleurAtout1(): string {
        return this._couleurPli1;
    }

    /**
     * setteurs
     */
    set scoreEquipe0(value: number) {
        this._pointPli0 = value;
    }
    set atoutPris0(value: string) {
        this._couleurPli0 = value;
    }
    set scoreEquipe1(value: number) {
        this._pointPli1 = value;
    }
    set atoutPris1(value: string) {
        this._couleurPli1 = value;
    }
}