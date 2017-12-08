import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AboutService} from '../about/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aboutService:AboutService, private router:Router) { }

  ngOnInit() {
    this.aboutService.currentRoute=this.router.url;
    // console.log(this.aboutService.currentRoute);
  }

}
