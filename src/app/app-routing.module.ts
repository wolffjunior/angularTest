import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoutingGuard } from 'src/guards/routing.guard';

const routes: Routes = [
 
  {
    path: "",
    component: NavBarComponent,
    canActivate:[RoutingGuard],
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "home",
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "create-book",
        component: CreateBookComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
