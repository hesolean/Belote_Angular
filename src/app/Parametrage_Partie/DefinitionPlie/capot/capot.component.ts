import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

// interface pour définir la liste des éléments à cocher
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-capot',
  templateUrl: './capot.component.html',
  styleUrls: ['./capot.component.css']
})
export class CapotComponent {
  // liste des éléments à cocher
  availableColors : ChipColor[] = [
    { name : 'Aucun' , color : 'accent' },
    { name : 'Capot' , color : 'accent' },
    { name : 'Dedans' , color : 'accent' }
  ] ;
}
