import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'info/:id', component: UserInfoPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
