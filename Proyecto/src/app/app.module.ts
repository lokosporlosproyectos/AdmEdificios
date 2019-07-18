import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ItemComponent } from './components/item/item.component';
import { TecnicosComponent } from './components/buscar/tecnicos/tecnicos.component';
import { EditarTecnicoComponent } from './components/buscar/tecnicos/editar-tecnico/editar-tecnico.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscarComponent,
    ItemComponent,
    TecnicosComponent,
    EditarTecnicoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
