import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { TecnicosComponent } from './components/buscar/tecnicos/tecnicos.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent  },
  { 
    path: 'buscar', 
    component: BuscarComponent ,
    children: [
      { path: 'tecnico', component: TecnicosComponent  }
    ]
  },
  

  { path: '**', pathMatch: 'full', redirectTo: 'home'  }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
