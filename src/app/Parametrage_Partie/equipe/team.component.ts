import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../Services/team.service';
import EquipesModel from '../Models/EquipesModel';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class EquipeComponent implements OnInit{

  equipes: EquipesModel[] = [];

  constructor(private service: EquipeService) {}

  ngOnInit():void {
    this.getEquipe();
  }

  getEquipe = () => {
    this.equipes = this.service.equipes;
    console.log("ok");
    
  }

  addEquipe = (e: string) => {
    this.service.addEquipe(e);    
  }  

  onChange = (id: number) => {
    this.service.onChange(id);
  }
}
