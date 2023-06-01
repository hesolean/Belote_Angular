import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-points-equipe',
  templateUrl: './points-equipe.component.html',
  styleUrls: ['./points-equipe.component.css']
})
export class PointsEquipeComponent implements OnInit {
  inputValue!: number;

  equipe10Der!: number;

  constructor(
    private teamService: EquipeService, 
    private comptePointService: ComptePointService,
    private sharedService: SharedService) {}

  ngOnInit(): void {
    // S'abonner à l'observable du service partagé pour recevoir les valeurs mises à jour
    this.sharedService.inputValue$.subscribe(value => {
      this.inputValue = value;    
      console.log("points " + value);
      
    });
  }

  addInput(saisie: HTMLInputElement): void {
    this.inputValue = +saisie.value;
  }
  /**
   * je récupère la valeur de l'input du template
   * @param inputValue points comptés par l'utilisateur
   */
  pointsEquipe(inputValue: number): void {
    this.comptePointService.setPointsComptes(inputValue);
  }

  /**
   * je transmets l'équipe qui va recevoir les points comptés
   * @param id id équipe
   */
  selectedTeam(id: number):void {
    this.comptePointService.setEquipePointsComptes(id);
  }
}
