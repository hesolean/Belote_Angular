
export default class Partie {
    
    private _pointsPartie: number;
    private _afficheAnnonces: boolean;
    
    /**constructeur d'un modèle */
    constructor(pointsPartie: number, afficheAnnonces: boolean) {
        this._pointsPartie = pointsPartie;
        this._afficheAnnonces = afficheAnnonces;
    }

    /**
     * getteurs
     */
    get pointsPartie(): number {
        return this._pointsPartie;
    }
    get afficheAnnonces(): boolean {
        return this._afficheAnnonces;
    }
    

    /**
     * setteurs
     */
    set pointsPartie(value: number) {
        this._pointsPartie = value;
    }
    set afficheAnnonces(value: boolean) {
        this._afficheAnnonces = value;
    }
}