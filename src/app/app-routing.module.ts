import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAccessComponent } from './game-access/game-access.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
  {path: "",component : LoginComponent},
  {path: "game-access", component: GameAccessComponent},
  {path: "login", component: LoginComponent},
  {path: "game", component: GameComponent},
  {path: "logout",component: LogoutComponent},
  {path: "signup", component: SignupComponent},
  {path: "historique", component:HistoriqueComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
