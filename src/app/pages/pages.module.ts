import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.component';
import { PagesRoutingModule } from './pages-routing.module';
import { IncreaserComponent } from '../components/increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../components/chart/chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
        IncreaserComponent,
        ChartComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent
    ],
    providers: [],
})

export class PagesModule {}





