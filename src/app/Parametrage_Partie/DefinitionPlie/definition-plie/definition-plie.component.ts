import { Component, Input, OnInit } from '@angular/core';
import { ComptePointService } from '../../services/compte-point.service';
import { PartieService } from '../../services/partie.service';
import { EquipeService } from '../../services/team.service';

@Component({
  selector: 'app-definition-plie',
  templateUrl: './definition-plie.component.html',
  styleUrls: ['./definition-plie.component.css']
})

export class DefinitionPlieComponent implements OnInit{

  // je donne le nom au bouton
  btnValide: string = "Valider le plie";
  btnValide2: string = "Enregistrer la partie";

  // je récupère l'information capot de mon service ComptePoint
  capot: string = this.comptePointService.capot;
  
  // je crée un boolean pour afficher ou non les composants 10 de der et points équipe
  // il est utilisé dans le template
  affiche: boolean = false;

  // je crée un boolean pour récupérer si je dois afficher les annonces
  @Input()
  afficheAnnonces!: boolean;

  // fin de partie
  afficheDefPli: boolean = !this.comptePointService.finPartie;
  finPartie: boolean = false;

  constructor(
    private partieService: PartieService,
    private teamService: EquipeService,
    private comptePointService: ComptePointService
    ) {}
  
  ngOnInit(): void {
    this.getAnnonces();
    }

  /**
   * Je récupère les informations des annonces
   */
  getAnnonces = () => {
    this.afficheAnnonces = this.partieService.afficheAnnonces;
    console.log("affiche annonces def plie "+this.afficheAnnonces);    
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
   * méthode qui appelle celle de ComptePointService
   * @param e $event du template pour signaler le click
   */
  handleAddPointTotal = (e: any) => {
    // appelle la fonction de compte service pour provoquer l'ajout des points
    this.comptePointService.onAddPointTotal(); 
    this.finPartie = this.comptePointService.finPartie;  
  }

  /**
   * lance l'enregistrement des totaux de la partie
   * @param e event
   */
  handleAddPartie = (e: any) => {
    this.comptePointService.onArchivesParties();
  }
}
