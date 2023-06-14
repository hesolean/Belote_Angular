import { Component, Input, OnInit } from '@angular/core';
import EquipesModel from '../../Models/EquipesModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit{
/** pas de bouton delete pour le moment
 *   btnDelete: string = "delete"; */

  constructor(){}

  // décorateur utilise dans le ngFor pour lister tous les éléments du tableau
  @Input()
  equipes: EquipesModel[] = [new EquipesModel('', [], [], 0, [])]

  /**évènement lié au template team.component pour la méthode onChange
  @Output()
  id: EventEmitter<number> = new EventEmitter(); */

  ngOnInit():void {}

  /*onChange = (data: number) => {
    this.id.emit(data)
  }

  delete = (id:number) => {
    console.log(id);  
  }*/
}
