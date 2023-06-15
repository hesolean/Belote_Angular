import { Injectable } from "@angular/core";
import Partie from "../models/PartieModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;
    afficheAnnonces!: boolean;
    
    constructor() {}

    defPartie(partie: Partie) {
        this.pointsPartie = partie.pointsPartie;
        console.log("pts partie : " + this.pointsPartie );
        this.afficheAnnonces = partie.afficheAnnonces;
        console.log("affiche annonces "+this.afficheAnnonces);
    }
}
