import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AnnoncesService {

    pointsAnnoncesEquipe0: number = 0;
    pointsAnnoncesEquipe1: number = 0;

    // equipes recevant les points annonces
    equipeBelote: number = 2;
    equipeTierce: number = 2;
    equipeCinquante: number = 2;
    equipeCent: number = 2;
    equipeCarreValet: number = 2;
    equipeCarre9: number = 2;
    equipeCarreAutres: number = 2;
    equipeCarre8!: boolean;

    /**
     * je récupère l'id de l'équipe qui va recevoir les points des annonces
     * @param id id equipe
     */
    setEquipeBelote = (id: number) => {
        this.equipeBelote = id;
    }
    setEquipeTierce = (id: number) => {        
        this.equipeTierce = id;
    }
    setEquipeCinquante = (id: number) => {
        this.equipeCinquante = id;
    }
    setEquipeCent = (id: number) => {
        this.equipeCent = id;
    }
    setEquipeCarreValet = (id: number) => {
        this.equipeCarreValet = id;
    }
    setEquipeCarre9 = (id: number) => {
        this.equipeCarre9 = id;
    }
    setEquipeCarreAutres = (id: number) => {
        this.equipeCarreAutres = id;
    }
    setEquipeCarre8 = (carre8Checked: boolean) => {        
    }
    /**
     * méthode qui permet d'ajouter des points à une équipe lors de la définition de la partie
     * @param equipe10Der id de l'équipe qui reçoit les points
     */
    onAddPointBelote = () => {
        
        if (this.equipeBelote == 0) {
            this.pointsAnnoncesEquipe0 += 20
            
        }
        if (this.equipeBelote == 1) {
            this.pointsAnnoncesEquipe1 += 20

        }        
    }
    onAddPointTierce = () => {
        if (this.equipeTierce == 0) {
            this.pointsAnnoncesEquipe0 += 20

        }
        if (this.equipeTierce == 1) {
            this.pointsAnnoncesEquipe1 += 20

        }        
    }
    onAddPointCinquante = () => {
        if (this.equipeCinquante == 0) {
            this.pointsAnnoncesEquipe0 += 50

        }
        if (this.equipeCinquante == 1) {
            this.pointsAnnoncesEquipe1 += 50

        }        
    }
    onAddPointCent = () => {
        if (this.equipeCent == 0) {
            this.pointsAnnoncesEquipe0 += 100

        }
        if (this.equipeCent == 1) {
            this.pointsAnnoncesEquipe1 += 100

        }        
    }
    onAddPointCarreValet = () => {
        if (this.equipeCarreValet == 0) {
            this.pointsAnnoncesEquipe0 += 200

        }
        if (this.equipeCarreValet == 1) {
            this.pointsAnnoncesEquipe1 += 200

        }        
    }
    onAddPointCarre9 = () => {
        if (this.equipeCarre9 == 0) {
            this.pointsAnnoncesEquipe0 += 150

        }
        if (this.equipeCarre9 == 1) {
            this.pointsAnnoncesEquipe1 += 150

        }        
    }

    onAddPointCarreAutres = () => {
        if (this.equipeCarreAutres == 0) {
            this.pointsAnnoncesEquipe0 += 100

        }
        if (this.equipeCarreAutres == 1) {
            this.pointsAnnoncesEquipe1 += 100

        }        
    }
    onAddCarre8 = (carre8Checked: boolean) => {
        this.equipeCarre8 = carre8Checked;        
    }


}