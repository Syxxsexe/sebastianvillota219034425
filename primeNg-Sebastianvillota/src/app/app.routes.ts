import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';

export const routes: Routes = [

{
    path:'login',
    component: LoginComponent
},

{
    path:'register',
    component: RegisterComponent
},

{
    path:'home',
    component: HomeComponent
},

{
    path:'',
    redirectTo: 'home', pathMatch: 'full'
},
{
    path:'other',
    component: OtherComponent
},
];
