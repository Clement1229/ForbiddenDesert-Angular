import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RPGUser } from './rpguser.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RpguserService {

  private static readonly POST_USER_URL = 'http://18.217.187.31:8765/portal/login';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  createRPGUser(rpguser: RPGUser): Observable<any> {
    return this.http.post(RpguserService.POST_USER_URL, rpguser, {headers: this.headers});
}

}
