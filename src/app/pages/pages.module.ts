import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

// Modulos
import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from './../components/components.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { CountSettingsComponent } from './count-settings/count-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CountSettingsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule,ComponentsModule,ChartsModule],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CountSettingsComponent
  ],
})
export class PagesModule {}
