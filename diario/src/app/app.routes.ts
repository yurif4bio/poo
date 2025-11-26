import { Routes } from '@angular/router';
import { Diario } from './diario/diario';

export const routes: Routes = [
    {path: 'diario', component: Diario},        
    {path: '', redirectTo: '/diario', pathMatch: 'full'}
];
