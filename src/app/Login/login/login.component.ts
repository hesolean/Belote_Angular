import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // je donne un nom à mon bouton
  btnValide: string = "Valider";
  
    // je crée une variable formValues qui est un FormGroup
    formValues: FormGroup = this.formBuilder.group({
      // je crée des champs email et password qui sont des FormControl
      email: ['', [Validators.required, Validators.email]], // je peux mettre un ou plusieurs validateur(s)
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    // je crée une variable submitted qui est un boolean
    submitted: boolean = false;
    formValidated: boolean = false;
  
    // je crée un constructeur qui prend en paramètre la déclaration d'une variable 
    //nommée formBuilder de type formBuilder
    constructor(private formBuilder: FormBuilder) { };
  
    // je crée une méthode onSubmit qui sera appelée lorsque le formulaire sera soumis
    onSubmit() {
      // je passe la variable submitted à true
      this.submitted = true;
      //  je vérifie si le formulaire est valide
      if (this.formValues.valid) {
        // si le formulaire est valide, je passe la variable formValidated à true 
        //ce qui me permettra de signaler
        // à l'utilisateur que le formulaire a bien été validé via un message
        this.formValidated = true;
      }
    }
    // je crée un getter pour récupérer le formulaire
    // je peux ainsi récupérer les champs du formulaire dans mon template html
    // exemple: form['email'] ou form['password']
    // je peux aussi récupérer les validateurs du formulaire dans mon template html via la méthode hasError
    // exemple: form['email'].hasError('required') ou form['email'].hasError('email')
    public get form() {
      return this.formValues.controls;
    }
  }
