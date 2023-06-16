import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})

export class AddEquipeComponent implements OnInit{

  constructor(){}
  ngOnInit():void {}

  // décorateur pour récupérer un élément
  // depuis l'input du template 
  // vers la méthode addEquipe du composant team en passant par les services
  @Output()
  newTeam: EventEmitter<string> = new EventEmitter()

  // méthode pour ajouter un élément dans la liste

  handleAddEquipe(e: HTMLInputElement) {
    const data = e.value;

    if (data == "") return;
    this.newTeam.emit(data); 
    // emet un $event qui correspond au paramètre de la méthode add utilisée dans le template
    e.value = ""; // remet l'input à zéro
  }

  }


