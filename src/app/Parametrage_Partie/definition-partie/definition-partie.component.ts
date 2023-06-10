import { Component, OnInit } from '@angular/core';
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

  btnValide: string = "Valider les réglages"

  // je crée une variable de soumission et de validation pour la création de la réservation
  submitted: boolean = false;
  formValidated: boolean = false;

  // boolean pour affichage de la validation de la requète
  partieValide: boolean = false;

  // formValues pour la soumission
  formValues: FormGroup = this.formBuilder.group({
    // je crée un champ nom qui est un FormControl, idem pour description
    pointsPartie: ['', Validators.required],
    afficheAnnonces: ['', Validators.required]
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
      // si le formulaire est valide, je passe la variable formValidated à true ce qui me permettra de signaler
      // à l'utilisateur que le formulaire a bien été validé via un message

      // this.partieService.defPartie(formGroup.value).subscribe(
      //   (response:any) => {
      //     this.partieValide=true;
      //   },
      //   (error:any) => {
      //     //throw erreur
      //     console.log(error);
      //   }
      // )
      this.partieService.defPartie(formGroup.value)
    }
  }
  
  //debug pour vérifier si les datas sont valides.
  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }

  validerParam(){
    this.afficheTableau = true;
    this.afficheDefPlie = true;
  }
}
