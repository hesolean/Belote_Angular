
export default class Partie {
    
    private _pointsPartie: number;
    
    /**constructeur d'un modèle */
    constructor(pointsPartie: number, afficheAnnonces: boolean) {
        this._pointsPartie = pointsPartie;
    }

    /**
     * getteurs
     */
    get pointsPartie(): number {
        return this._pointsPartie;
    }

    /**
     * setteurs
     */
    set pointsPartie(value: number) {
        this._pointsPartie = value;
    }
}