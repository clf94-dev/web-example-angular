import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormComponent} from './components/form/form.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    
    {path: 'pagina-test/:nombre/:apellido', component: PaginaComponent},                
    {path: '**' , component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> =  RouterModule.forRoot(appRoutes);