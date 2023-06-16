import { Injectable } from "@angular/core";
import Partie from "../models/PartieModel";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;
    afficheAnnonces: boolean = false;

    onAfficheAnnonces = (afficheAnnonces: boolean) => {
        this.afficheAnnonces = afficheAnnonces;
        console.log("service " + this.afficheAnnonces);
        
    }

    onPtsFinPartie = (ptsFinPartie: number) => {
        this.pointsPartie = ptsFinPartie;
        console.log("pts partie : " + this.pointsPartie );

    }
}
