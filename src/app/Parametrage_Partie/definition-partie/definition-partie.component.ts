import { Component } from '@angular/core';

@Component({
  selector: 'app-definition-partie',
  templateUrl: './definition-partie.component.html',
  styleUrls: ['./definition-partie.component.css']
})
export class DefinitionPartieComponent {
//variable qui est envoyé à l'enfant equipe
  equipe!: string;
}
