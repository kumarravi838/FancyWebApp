import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../about/about.service';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
imageData:any = [];
filterCondition: string = 'all';
  constructor(private router: Router, private aboutService: AboutService, private galleryService:GalleryService) { }

  ngOnInit() {
    this.galleryService.callImgData().subscribe(imgdata => {
      this.imageData = imgdata;
      console.log(this.imageData);
    })
    this.aboutService.currentRoute = this.router.url;
  }

}
