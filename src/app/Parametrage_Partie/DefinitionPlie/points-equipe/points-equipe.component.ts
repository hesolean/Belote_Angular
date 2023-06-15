import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../services/team.service';
import { ComptePointService } from '../../services/compte-point.service';

@Component({
  selector: 'app-points-equipe',
  templateUrl: './points-equipe.component.html',
  styleUrls: ['./points-equipe.component.css']
})
export class PointsEquipeComponent implements OnInit {
  points: number = 0;

  equipe10Der!: number;

  constructor(
    private teamService: EquipeService, 
    private comptePointService: ComptePointService) {}

  ngOnInit(): void {   
  }

  /**
   * je récupère la valeur de l'input du template
   * @param inputValue points comptés par l'utilisateur
   */
  pointsEquipe(): void {
    this.comptePointService.setPointsComptes(this.points);
    console.log("points" + this.points);
  }

  /**
   * je transmets l'équipe qui va recevoir les points comptés
   * @param id id équipe
   */
  selectedTeam(id: number):void {
    this.comptePointService.setEquipePointsComptes(id);
  }
}
