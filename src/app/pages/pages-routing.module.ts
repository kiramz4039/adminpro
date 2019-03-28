import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
    {  path: '',
       component: PagesComponent,
       canActivate: [LoginGuardGuard],
       children: [
        {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
        {path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
        {path: 'graphic1', component: Graphic1Component, data: {title: 'Graficas'}},
        {path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}},
        {path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Ajustes de cuenta'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
