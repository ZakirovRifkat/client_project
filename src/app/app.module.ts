import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { DutyTableComponent } from './components/duty-table/duty-table.component';
import { ShortUserInfoComponent } from './components/short-user-info/short-user-info.component';
import { MainUserInfoComponent } from './components/main-user-info/main-user-info.component';
import { TaskStatsComponent } from './metrics/task-stats/task-stats.component';
import { NotificationStatsComponent } from './metrics/notification-stats/notification-stats.component';
import { EfficiencyStatsComponent } from './metrics/efficiency-stats/efficiency-stats.component';
import { AddMetricsComponent } from './metrics/add-metrics/add-metrics.component';
import { IncidentsStatsComponent } from './widgets/incidents-stats/incidents-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    UserInformationComponent,
    PasswordFormComponent,
    StartPageComponent,
    DutyTableComponent,
    ShortUserInfoComponent,
    MainUserInfoComponent,
    TaskStatsComponent,
    NotificationStatsComponent,
    EfficiencyStatsComponent,
    AddMetricsComponent,
    IncidentsStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
