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
import { TaskStatsComponent } from './widgets/task-stats/task-stats.component';
import { NotificationStatsComponent } from './widgets/notification-stats/notification-stats.component';
import { EfficiencyStatsComponent } from './widgets/efficiency-stats/efficiency-stats.component';

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
