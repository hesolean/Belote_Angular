import { Injectable } from "@angular/core";
import Partie from "../Models/PartieModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;

    afficheAnnonces: boolean = false;
    
    constructor() {}

    defPartie(partie: Partie) {
        this.pointsPartie = partie.pointsPartie;
        this.afficheAnnonces = partie.afficheAnnonces;
    }
}
