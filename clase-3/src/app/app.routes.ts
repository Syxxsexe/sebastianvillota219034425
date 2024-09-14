import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';

export const routes: Routes = [
    {
    path:'',
    component: MytestcomponentComponent
    },
    {path:'Auth',
        component: MytestcomponentComponent
    },

    {

    path:'service',
    component: ServiceComponent

    },
    {

        path: 'Sidebar',
        component: SidebarComponent

    }
];
