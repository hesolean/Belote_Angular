import { Component } from '@angular/core';
import { EquipeService } from '../../Services/team.service';
import { ComptePointService } from '../../Services/compte-point.service';

@Component({
  selector: 'app-pris-atout',
  templateUrl: './pris-atout.component.html',
  styleUrls: ['./pris-atout.component.css']
})
export class PrisAtoutComponent {
  // récupère les données du template
  selectedButton!: string;
  preneur!: number;

  constructor(private teamService: EquipeService, private comptePointService: ComptePointService) {}

  ngOnInit(): void {}
  
  /**
   * je transmets l'équipe qui a pris
   * @param id id équipe
   */
  selectedTeam(id: number):void {
    this.comptePointService.setPreneur(id);
    this.comptePointService.setCouleurAtout(this.selectedButton);
  }
}
