import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
interface UserResponse {
  login: string,
  bio: string,
  company: string,
  name: string
}
@Injectable()
export class AboutService {

  constructor(private http: HttpClient) { }
  callAboutData() {
    return this.http.get<UserResponse>('../../assets/data/info.json');
  }

  currentRoute:string='';
}
