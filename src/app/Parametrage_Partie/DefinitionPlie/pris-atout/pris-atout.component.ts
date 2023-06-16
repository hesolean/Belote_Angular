import { Component } from '@angular/core';
import { ComptePointService } from '../../services/compte-point.service';

@Component({
  selector: 'app-pris-atout',
  templateUrl: './pris-atout.component.html',
  styleUrls: ['./pris-atout.component.css']
})

export class PrisAtoutComponent {

  // récupère les données du template
  selectedButton!: string;
  preneur!: number;

  constructor(private comptePointService: ComptePointService) {}

  ngOnInit(): void {}
  
  /**
   * je transmets l'équipe qui a pris
   * @param id id équipe
   */
  handleSelectedTeam(id: number):void {
    this.comptePointService.setPreneur(id);
    this.comptePointService.setCouleurAtout(this.selectedButton);
  }
}
