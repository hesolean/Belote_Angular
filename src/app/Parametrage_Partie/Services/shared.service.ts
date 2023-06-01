import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// service créé pour récupérer les inputs des annonces et des points sans passer par la hiérarchie des composants

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private inputValueSubject = new Subject<number>();
  inputValue$ = this.inputValueSubject.asObservable();

  constructor() { }

  setInputValue(value: number) {
    this.inputValueSubject.next(value);

    console.log("shared service : " + value);
    
  }
}
