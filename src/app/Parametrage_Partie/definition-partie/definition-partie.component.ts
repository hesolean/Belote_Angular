
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PartieService } from '../services/partie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModaleService } from '../services/modale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-definition-partie',
  templateUrl: './definition-partie.component.html',
  styleUrls: ['./definition-partie.component.css']
})

export class DefinitionPartieComponent implements OnInit, OnDestroy{

  // options d'affichage
  subscription!: Subscription;
  afficheTableau: boolean = false;
  afficheDefPlie: boolean = false;
  afficheAnnonces: boolean = false;

  // nom du bouton
  btnValide: string = "Valider"

  // je crée une variable de soumission et de validation pour la création de la réservation
  submitted: boolean = false;
  formValidated: boolean = false;

  // boolean pour affichage de la validation de la requète
  partieValide: boolean = false;

  // formValues pour la soumission
  formValues: FormGroup = this.formBuilder.group({
    // je crée un champ pour le FormControl
    pointsPartie: [0, Validators.required]
    });

  constructor(
    private formBuilder: FormBuilder,
    private partieService: PartieService,
    private modaleService: ModaleService
    ) {}

  ngOnInit( ): void {
    // je réinitialise si l'utilisateur change les champs
    this.formValues.valueChanges.subscribe(()=> {
      this.submitted=false;
    })

    this.subscription = this.modaleService.afficheTableau.subscribe(
      (bool:boolean) => {
        this.afficheTableau = bool;//j'affecte la nouvelle valeur de bbolean captée
      }
    )

    this.subscription = this.modaleService.afficheDefPlie.subscribe(
      (bool:boolean) => {
        this.afficheDefPlie = bool;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  handleParamPartie(formGroup: FormGroup) {
    // empeche de rafraichir la page au moment de la soumisson
    console.log(JSON.stringify(formGroup.value, null, 2));

    // je passe la variable submitted à true pour pouvoir afficher a confirmation à l'écran avec un ngIf
    this.submitted = true;

    // je vérifie si le formulaire est valide
    if (formGroup.valid) {
      this.partieService.defPartie(formGroup.value);
    }
  }
  
  //debug pour vérifier si les datas sont valides.
  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  /**
   * change les booleans pour afficher le tableau des résultats
   */
  handleValiderParam(){
    this.modaleService.setAfficheTableau = true;
    this.modaleService.setAfficheDefPlie = true;      
  }
  handleAfficheAnnonces = () => {
    this.partieService.onAfficheAnnonces(this.afficheAnnonces);
  }
  handleClose = () => {
    this.modaleService.setPartieComponent = false;
  }
}
