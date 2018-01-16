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

}
