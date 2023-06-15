import { Component, OnInit } from '@angular/core';
import { ComptePointService } from '../../services/compte-point.service';

@Component({
  selector: 'app-dix-der',
  templateUrl: './dix-der.component.html',
  styleUrls: ['./dix-der.component.css']
})
export class DixDerComponent implements OnInit{

  constructor(private comptePointService: ComptePointService) {}

  ngOnInit(): void {}
  
  /**
   * je transmets l'équipe qui va recevoir le 10 de der
   * @param id id équipe
   */
  selectedTeam(id: number):void {
    this.comptePointService.setEquipe10Der(id);
  }
}
