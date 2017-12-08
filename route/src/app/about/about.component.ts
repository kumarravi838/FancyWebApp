import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AboutService } from './about.service';

interface UserResponse {
  login: string,
  bio: string,
  company: string,
  name: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient, private aboutService: AboutService, private router: Router) {} 

  resposeData: any = '';
  currentRoute: any = '';

  ngOnInit(): void {
    this.aboutService.currentRoute = this.router.url;
    // console.log(this.aboutService.currentRoute);
    this.aboutService.callAboutData().subscribe(data => {
      this.resposeData = data;
    })    
  }

}
