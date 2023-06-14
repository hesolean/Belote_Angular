import { Component, OnInit } from '@angular/core';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-points-equipe',
  templateUrl: './points-equipe.component.html',
  styleUrls: ['./points-equipe.component.css']
})

export class PointsEquipeComponent implements OnInit {
  
  // je récupère les points comptés et l'id de l'équipe concernée
  points: number = 0;
  equipe10Der!: number;

  constructor(private comptePointService: ComptePointService) {}

  ngOnInit(): void {   
  }

  /**
   * je récupère la valeur de l'input du template
   * @param inputValue points comptés par l'utilisateur
   */
  handlePointsEquipe(): void {
    this.comptePointService.setPointsComptes(this.points);
    console.log("points" + this.points);
  }

  /**
   * je transmets l'équipe qui va recevoir les points comptés
   * @param id id équipe
   */
  handleSelectedTeam(id: number):void {
    this.comptePointService.setEquipePointsComptes(id);
  }
}
