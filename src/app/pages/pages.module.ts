import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule
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
