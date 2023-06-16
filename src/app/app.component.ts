import { Component } from '@angular/core';
import { ComptePointService } from './Parametrage_Partie/Services/compte-point.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  title = 'belote_angular';
  
  // option affichage bouton
  afficheBouton: boolean = this.comptePointsService.finPartie;
  
  // je donne le nom au bouton
  btnValide: string = "Enregistrer la partie";

  constructor(private comptePointsService: ComptePointService) {}
}
