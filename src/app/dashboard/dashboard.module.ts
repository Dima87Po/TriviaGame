import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { UIModule } from '../shared/modules/ui/ui.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
