import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {

  isLoggdin: boolean = false;
  loginName:string='';
  constructor() { }

  login(user: User): boolean {
    // debugger
    if (user.userName === "ravi" && user.password === "1234") {
      this.isLoggdin = true;
    }
    else{
      this.isLoggdin = false;
    }
    return this.isLoggdin;
  }

}
