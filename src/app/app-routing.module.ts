import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";








const routes:Routes =[
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },



];