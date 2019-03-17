import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
    {path: '', component: PagesComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graphic1', component: Graphic1Component},
        {path: 'account-settings', component: AccountSettingsComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
