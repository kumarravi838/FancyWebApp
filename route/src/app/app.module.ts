import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutService } from './about/about.service';
import { GalleryService } from './gallery/gallery.service';
import { FilterPipe } from './gallery/filter.pipe';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuard } from './login/auth.guard';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    FilterPipe,
    LoginComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  ],
  providers: [AboutService, GalleryService, LoginService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
