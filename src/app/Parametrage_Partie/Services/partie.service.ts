import { Injectable } from "@angular/core";
import Partie from "../Models/PartieModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;
    
    constructor() {}

    defPartie(partie: Partie) {
        this.pointsPartie = partie.pointsPartie;
        console.log("pts partie : " + this.pointsPartie );
        
    }
}
