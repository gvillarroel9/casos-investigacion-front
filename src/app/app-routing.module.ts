import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AppComponent } from './app.component';
import { CasosListComponent } from './views/casos/casos-list/casos-list.component';
import { CasosAddComponent } from './views/casos/casos-add/casos-add.component';
import { CasosEditComponent } from './views/casos/casos-edit/casos-edit.component';
import { InvestigadorListComponent } from './views/investigador/investigador-list/investigador-list.component';
import { ProveedorListComponent } from './views/proveedor/proveedor-list/proveedor-list.component';
import { RolComponent } from './views/rol/rol.component';
import { CasoComponent } from './views/tipos/caso/caso.component';
import { FichaComponent } from './views/tipos/ficha/ficha.component';
import { IrregularidadComponent } from './views/tipos/irregularidad/irregularidad.component';
import { SubIrregularidadComponent } from './views/tipos/sub-irregularidad/sub-irregularidad.component';
import { ActividadComponent } from './views/actividad/actividad.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  { path: '', component: CasosListComponent},
  { path: 'caso-add', component: CasosAddComponent},
  { path: 'caso-edit', component: CasosEditComponent},
  { path: 'investigador', component: InvestigadorListComponent},
  { path: 'actividad', component: ActividadComponent},
  { path: 'proveedor', component: ProveedorListComponent},
  { path: 'rol', component: RolComponent},
  { path: 'tipo-caso', component: CasoComponent},
  { path: 'tipo-ficha', component: FichaComponent},
  { path: 'tipo-irre', component: IrregularidadComponent},
  { path: 'subtipo-irre', component: SubIrregularidadComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
