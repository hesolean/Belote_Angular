import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComptePointService } from '../../services/compte-point.service';
import { PartieService } from '../../services/partie.service';
import { ModaleService } from '../../services/modale.service';

@Component({
  selector: 'app-definition-pli',
  templateUrl: './definition-pli.component.html',
  styleUrls: ['./definition-pli.component.css']
})

export class DefinitionPliComponent implements OnInit{

  // je donne le nom aux boutons
  btnValide: string = "Valider le pli";
  btnValide2: string = "Enregistrer la partie";
  btnValide3: string = "Annuler le pli";

  // je récupère l'information capot de mon service ComptePoint
  capot: string = this.comptePointService.capot;
  
  // je crée un boolean pour afficher ou non les composants 10 de der et points équipe
  // il est utilisé dans le template
  affiche: boolean = false;

  // je crée un boolean pour récupérer si je dois afficher les annonces
  afficheAnnonces!: boolean;

  // fin de partie
  afficheDefPli: boolean = !this.comptePointService.finPartie;

  constructor(
    private partieService: PartieService,
    private comptePointService: ComptePointService,
    private modaleService: ModaleService
    ) {}
  
  ngOnInit(): void {
    this.afficheAnnonces = this.partieService.afficheAnnonces;
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
    this.modaleService.setPlieComponent = false;  
  }

  /**
   * lance l'enregistrement des totaux de la partie
   * @param e event
   */
  handleAddPartie = (e: any) => {
    this.comptePointService.onArchivesParties();
  }

  @Output() annulePli = new EventEmitter<boolean>();
  handleAnnulePli = (e: any) => {
    this.annulePli.emit(false);
  }
}
