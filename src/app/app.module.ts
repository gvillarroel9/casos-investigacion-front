import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// tslint:disable-next-line: max-line-length
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbButtonModule, NbUserModule, NbCheckboxModule, NbInputModule, NbSelectComponent, NbSelectModule, NbActionsModule, NbIconModule, NbTooltipModule   } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { HomeComponent } from './views/home/home.component';
import { CasosListComponent } from './views/casos/casos-list/casos-list.component';
import { CasosAddComponent } from './views/casos/casos-add/casos-add.component';
import { CasosEditComponent } from './views/casos/casos-edit/casos-edit.component';
import { InvestigadorListComponent } from './views/investigador/investigador-list/investigador-list.component';
import { ProveedorListComponent } from './views/proveedor/proveedor-list/proveedor-list.component';
import { CasoComponent } from './views/tipos/caso/caso.component';
import { FichaComponent } from './views/tipos/ficha/ficha.component';
import { IrregularidadComponent } from './views/tipos/irregularidad/irregularidad.component';
import { SubIrregularidadComponent } from './views/tipos/sub-irregularidad/sub-irregularidad.component';
import { RolComponent } from './views/rol/rol.component';
import { ActividadComponent } from './views/actividad/actividad.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasosListComponent,
    CasosAddComponent,
    CasosEditComponent,
    InvestigadorListComponent,
    ProveedorListComponent,
    CasoComponent,
    FichaComponent,
    IrregularidadComponent,
    SubIrregularidadComponent,
    RolComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbCheckboxModule,
    NbButtonModule,
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbTooltipModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbEvaIconsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          login: {
            redirect: {
              success: '/dashboard/',
              failure: null, // stay on the same page
            },
          },

          register: {
            redirect: {
              success: '/welcome/',
              failure: null, // stay on the same page
            },
          }
        }),
      ],
      forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
