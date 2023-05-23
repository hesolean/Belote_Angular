import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  constructor() {}

  // récupère la valeur à mettre dans le bouton dans le composant dans lequel il est appelé
  @Input()
  value: string = ""

  // évènement click émit par la méthode action vers le composant équipe pour la méthode addEquipe
  @Output()
  event: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit(): void {}

  action = () => {
    this.event.emit();
  }
}
