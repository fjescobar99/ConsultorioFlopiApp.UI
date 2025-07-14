import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultorioPageComponent } from './components/consultorio/consultorio-page/consultorio-page.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'consultorioPage', component: ConsultorioPageComponent
    }
];
