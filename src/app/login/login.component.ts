import { Component, OnInit } from '@angular/core';
import { RPGUser } from './rpguser.interface';
import { RpguserService } from './rpguser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rpguser : RPGUser = {uId: null, uFirstName: null, uLastName: null,uUserName:'', uPassword:'', uEmail: null, ocId:null}
  constructor(private rpguserService: RpguserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.rpguserService.createRPGUser(this.rpguser).subscribe(
      response => {
        //if(response.roleType == 1){
          this.router.navigateByUrl('/home');
          localStorage.setItem('currentUser', JSON.stringify(response));
          
        //}
        // else if(response.roleType == 2){
        //   this.router.navigateByUrl('/user-home')
        //   localStorage.setItem('currentUser', JSON.stringify(response));
        // }
      });
  }
}
