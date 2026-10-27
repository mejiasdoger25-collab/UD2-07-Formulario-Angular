import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';

export const routes: Routes = [
    {path: 'formulario', component: RegisterFormComponent},
    {path: '', pathMatch: 'full', redirectTo: '/formulario'},
    {path: '**', component: NotFoundPage}
];
