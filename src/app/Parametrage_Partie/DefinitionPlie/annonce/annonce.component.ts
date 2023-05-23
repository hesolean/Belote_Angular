import { Component, OnInit } from '@angular/core';
import EquipesModel from '../../Models/EquipesModel';
import { EquipeService } from '../../Services/team.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  // je récupère les données dans le tableau d'équipes
  equipes: EquipesModel[] = [];
  
  constructor(private service: EquipeService) {}

  ngOnInit():void {
    this.equipes = this.service.equipes;}
}
