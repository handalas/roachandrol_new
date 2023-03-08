import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './components/body/noticias/noticias.component';
import { PortadaComponent } from './components/body/portada/portada.component';
import { RegistrateComponent } from './components/body/registrate/registrate.component';

const routes: Routes = [
  {path: 'portada', component:PortadaComponent},
  {path: 'registrate', component:RegistrateComponent},
  {path: 'noticias', component:NoticiasComponent},
  {path: '', pathMatch: 'full', redirectTo: 'portada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
