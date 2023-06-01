import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';
import { SharedService } from '../../Services/shared.service';


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

  // j'utilise le shared service
  inputValue!: number;

  constructor(
    private teamService: EquipeService, 
    private comptePointService: ComptePointService, 
    private sharedService: SharedService) {}
  
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
    console.log(this.affiche);
    
  }
  /**
   * méthode qui appelle celle de ComptePointService
   * @param e $event du template pour signaler le click
   */
  onAddPointTotal = (e: any) => {
    // récupère la valeur de l'input
    const value = this.inputValue;
console.log("onAddPointTotal : " + value);

    // transmets la valeur dans le shared service
    this.sharedService.setInputValue(value);

    // appelle la fonction de compte service pour provoquer l'ajout des points
    this.comptePointService.onAddPointTotal();   
  }
}
