import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'info/:id', component: UserInformationComponent },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
