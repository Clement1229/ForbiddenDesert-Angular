import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";




const routes:Routes =[
    //{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
    //{ path: 'login',  component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}