import { Component, Input, OnInit } from '@angular/core';
import { PartieService } from '../Services/partie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-definition-partie',
  templateUrl: './definition-partie.component.html',
  styleUrls: ['./definition-partie.component.css']
})
export class DefinitionPartieComponent implements OnInit{

  // options d'affichage
  afficheTableau: boolean = false;
  afficheDefPlie: boolean = false;
  annonces: boolean = false;

  btnValide: string = "Valider"

  // je crée une variable de soumission et de validation pour la création de la réservation
  submitted: boolean = false;
  formValidated: boolean = false;

  // boolean pour affichage de la validation de la requète
  partieValide: boolean = false;

  // formValues pour la soumission
  formValues: FormGroup = this.formBuilder.group({
    // je crée un champ pour le FormControl
    pointsPartie: [0, Validators.required],
    afficheAnnonces: [false, Validators.required]
    });

  constructor(
    private formBuilder: FormBuilder,
    private partieService: PartieService) {}

  ngOnInit( ): void {
    // je réinitialise si l'utilisateur change les champs
    this.formValues.valueChanges.subscribe(()=> {
      this.submitted=false;
    })
  }

  paramPartie(formGroup: FormGroup) {
    // empeche de rafraichir la page au moment de la soumisson
    console.log(JSON.stringify(formGroup.value, null, 2));

    // je passe la variable submitted à true pour pouvoir afficher a confirmation à l'écran avec un ngIf
    this.submitted = true;

    //  je vérifie si le formulaire est valide
    if (formGroup.valid) {
      
      this.partieService.defPartie(formGroup.value);
      this.annonces = formGroup.value.afficheAnnonces;
      console.log("annonces "+this.annonces);
      
    }
  }
  
  //debug pour vérifier si les datas sont valides.
  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  /**
   * change les booleans pour afficher le tableau des résultats et le paramétrage des plis
   */
  validerParam(){
    this.afficheTableau = true;
    this.afficheDefPlie = true;
  }
}
