import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-definition-plie',
  templateUrl: './definition-plie.component.html',
  styleUrls: ['./definition-plie.component.css']
})
export class DefinitionPlieComponent implements OnInit{

  // je donne le nom au bouton
  btnValide: string = "Valider le plie";

  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}
  
  ngOnInit(): void {
      
  }
  
  /**
   * méthode qui appelle celle de ComptePointService
   * @param e $event du template pour signaler le click
   */
  onAddPointTotal = (e: any) => {
    this.comptePointService.onAddPointTotal();
  }
}
