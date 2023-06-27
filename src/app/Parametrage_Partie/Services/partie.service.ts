import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PartieService {
    pointsPartie: number = 0;
    afficheAnnonces: boolean = false;

    onAfficheAnnonces = (afficheAnnonces: boolean) => {
        this.afficheAnnonces = afficheAnnonces;        
    }

    onPtsFinPartie = (ptsFinPartie: number) => {
        this.pointsPartie = ptsFinPartie;
    }
}
