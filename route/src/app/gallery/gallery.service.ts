import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) { }

  callImgData() {
    return this.http.get<any>('../../assets/data/img.json');
  }

}
