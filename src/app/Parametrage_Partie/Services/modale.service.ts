import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ModaleService {
    // modales page belote
    // comme un observable mais on lui met une valeur par défaut
    equipeComponent = new BehaviorSubject<boolean>(false);
    get getEquipeComponent(): BehaviorSubject<boolean> {
        return this.equipeComponent;
    }
    set setEquipeComponent(value: boolean) {
        this.equipeComponent.next(value);
    }

    partieComponent = new BehaviorSubject<boolean>(false);
    get getPartieComponent(): BehaviorSubject<boolean> {
        return this.partieComponent;
    }
    set setPartieComponent(value: boolean) {
        this.partieComponent.next(value);
    }

    afficheTableau = new BehaviorSubject<boolean>(false);
    get getAfficheTableau(): BehaviorSubject<boolean> {
        return this.afficheTableau;
    }
    set setAfficheTableau(value: boolean) {
        this.afficheTableau.next(value);
    }

    afficheDefPlie = new BehaviorSubject<boolean>(false);
    get getAfficheDefPlie(): BehaviorSubject<boolean> {
        return this.afficheDefPlie;
    }
    set setAfficheDefPlie(value: boolean) {
        this.afficheDefPlie.next(value);
    }

    plieComponent = new BehaviorSubject<boolean>(false);
    get getPlieComponent(): BehaviorSubject<boolean> {
        return this.plieComponent;
    }
    set setPlieComponent(value: boolean) {
        this.plieComponent.next(value);
    }
}