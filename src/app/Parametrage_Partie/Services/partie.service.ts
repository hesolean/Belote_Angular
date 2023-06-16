import { Injectable } from "@angular/core";
import Partie from "../models/PartieModel";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;
    afficheAnnonces: boolean = false;
    
    constructor() {}

    defPartie(partie: Partie) {
        this.pointsPartie = partie.pointsPartie;
        console.log("pts partie : " + this.pointsPartie );
        
    }

    onAfficheAnnonces = (afficheAnnonces: boolean) => {
        this.afficheAnnonces = afficheAnnonces;
        console.log("service " + this.afficheAnnonces);
        
    }
}
