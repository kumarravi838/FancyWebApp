import { Component, OnInit } from '@angular/core';
import { AboutService } from './about/about.service';
import { LoginService } from './login/login.service';
// import { User } from './login/user';
// import {HttpClient} from '@angular/common/http'; 
// interface UserResponse{
//   login:string,
//   bio:string,
//   company:string,
//   name:string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentRoute: string = '';
  checkUser(): string{
    return this.loginService.loginName
  }
  // userName: string = this.loginService.loginName;
  constructor(private aboutService: AboutService, private loginService: LoginService) {

  }
  checkRoute() {
    return this.aboutService.currentRoute;
  }
  ngOnInit() {

    // console.log(this.currentRoute);
    // this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data =>{
    //   console.log("User Login:"+data.login);
    //   console.log("Bio:"+data.bio);
    //   console.log("Company:"+data.company);
    //   console.log("Name:"+data.name);

    // })
  }
}
