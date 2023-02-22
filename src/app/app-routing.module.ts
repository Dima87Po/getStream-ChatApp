import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'chat', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent, ...canActivate(() => redirectLoggedInTo(['chat']))},
  {path: 'signup', component: SignUpComponent, ...canActivate(() => redirectLoggedInTo(['chat']))},
  {path: 'chat', ...canActivate(() => redirectUnauthorizedTo(['signin'])),
  loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
