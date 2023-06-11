import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';
import { PartieService } from '../../Services/partie.service';


@Component({
  selector: 'app-definition-plie',
  templateUrl: './definition-plie.component.html',
  styleUrls: ['./definition-plie.component.css']
})
export class DefinitionPlieComponent implements OnInit{

  // je donne le nom au bouton
  btnValide: string = "Valider le plie";

  // je récupère l'information capot de mon service ComptePoint
  capot: string = this.comptePointService.capot;
  
  // je crée un boolean pour afficher ou non les composants 10 de der et points équipe
  // il est utilisé dans le template
  affiche: boolean = false;

  // je crée un boolean pour récupérer si je dois afficher les annonces
  afficheAnnonces: boolean = false;

  // fin de partie
  afficheDefPli: boolean = !this.comptePointService.finPartie;
  finPartie: boolean = false;

  constructor(
    private partieService: PartieService,
    private teamService: EquipeService, 
    private comptePointService: ComptePointService) {}
  
  ngOnInit(): void {
      
  }

  /**
   * je définis le boolean affiche en fonction du type de capot
   * @param capot type de capot
   */
  onChangeAffiche = (capot: string) => {
    if (capot === 'Aucun') {
      this.affiche = true;
    } else {
      this.affiche = false;
    }    
  }

  /**
   * change le boolean de l'affichage du composant annonces
   * @param event checked
   */
  onCheckboxChange(event: any) {
    this.afficheAnnonces = !this.afficheAnnonces;
  }

  /**
   * méthode qui appelle celle de ComptePointService
   * @param e $event du template pour signaler le click
   */
  onAddPointTotal = (e: any) => {
    // appelle la fonction de compte service pour provoquer l'ajout des points
    this.comptePointService.onAddPointTotal(); 
    this.finPartie = this.comptePointService.finPartie;  
  }
}
