import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../about/about.service';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;

  constructor(private aboutService: AboutService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.aboutService.currentRoute = this.router.url;
  }

  login() {
    if (this.loginService.login(this.user)) {
      this.loginService.loginName = this.user.userName;
      this.router.navigate(['home']);
    }
    else {
      this.error = "The user name and password entered are not valid";
    }
  }

}
