import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-dix-der',
  templateUrl: './dix-der.component.html',
  styleUrls: ['./dix-der.component.css']
})
export class DixDerComponent implements OnInit{
  equipe10Der!: number;
  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}

  ngOnInit(): void {}
  
  /**
   * je transmets l'équipe qui va recevoir le 10 de der
   * @param id id équipe
   */
  selectedTeam(id: number):void {
    this.comptePointService.setEquipe10Der(id);
  }
}
