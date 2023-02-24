import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { DutyTableComponent } from './components/duty-table/duty-table.component';
import { ShortUserInfoComponent } from './components/short-user-info/short-user-info.component';
import { MainUserInfoComponent } from './components/main-user-info/main-user-info.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    PasswordFormComponent,
    DutyTableComponent,
    ShortUserInfoComponent,
    MainUserInfoComponent,
    UserInfoPageComponent,
    NotFoundPageComponent,
    MetricsComponent,
    WidgetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
