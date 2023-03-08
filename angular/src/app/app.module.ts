import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

import { TopBar } from './components/toolbar/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortadaComponent } from './components/body/portada/portada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrateComponent } from './components/body/registrate/registrate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MandatoryComponent } from './components/dialog/mandatory/mandatory.component';
import { RegisterOKComponent } from './components/dialog/register-ok/register-ok.component';
import { RegisterKOComponent } from './components/dialog/register-ko/register-ko.component';
import { NoticiasComponent } from './components/body/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBar,
    FooterComponent,
    PortadaComponent,
    RegistrateComponent,
    MandatoryComponent,
    RegisterOKComponent,
    RegisterKOComponent,
    NoticiasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
