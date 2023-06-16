import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ModaleService {
    // comme un observable mais on lui met une valeur par défaut
    equipeComponent = new BehaviorSubject<boolean>(false);

    get getEquipeComponent(): BehaviorSubject<boolean> {
        return this.equipeComponent;
    }

    set setEquipeComponent(value: boolean) {
        this.equipeComponent.next(value);
    }
}