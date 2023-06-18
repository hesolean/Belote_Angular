import { Component, Input, OnInit } from '@angular/core';
import EquipesModel from '../../models/EquipesModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit{

  constructor(){}

  // décorateur utilise dans le ngFor pour lister tous les éléments du tableau
  @Input()
  equipes: EquipesModel[] = [new EquipesModel('', [], [], 0, [])]

  ngOnInit():void {}

}
