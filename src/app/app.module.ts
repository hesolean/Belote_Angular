import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Les composants
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { EquipeComponent } from './Parametrage_Partie/equipe/team.component';
import { DefinitionPartieComponent } from './Parametrage_Partie/definition-partie/definition-partie.component';
import { DefinitionPlieComponent } from './Parametrage_Partie/DefinitionPlie/definition-plie/definition-plie.component';
import { PrisAtoutComponent } from './Parametrage_Partie/DefinitionPlie/pris-atout/pris-atout.component';
import { CapotComponent } from './Parametrage_Partie/DefinitionPlie/capot/capot.component';
import { PointsEquipeComponent } from './Parametrage_Partie/DefinitionPlie/points-equipe/points-equipe.component';
import { DerComponent } from './Parametrage_Partie/DefinitionPlie/der/der.component';
import { AnnonceComponent } from './Parametrage_Partie/DefinitionPlie/annonce/annonce.component';
import { ButtonComponent } from './Commun/button/button.component';
import { AddEquipeComponent } from './Parametrage_Partie/equipe/add-team/add-team.component';
import { DisplayComponent } from './Parametrage_Partie/equipe/display/display.component';
import { DixDerComponent } from './Parametrage_Partie/DefinitionPlie/dix-der/dix-der.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EquipeComponent,
    DefinitionPartieComponent,
    DefinitionPlieComponent,
    PrisAtoutComponent,
    CapotComponent,
    PointsEquipeComponent,
    DerComponent,
    AnnonceComponent,
    ButtonComponent,
    AddEquipeComponent,
    DisplayComponent,
    DixDerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
