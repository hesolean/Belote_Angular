import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // je donne le nom au bouton
  btnValide: string = "Valider";
  
  title = 'belote_angular';
}
