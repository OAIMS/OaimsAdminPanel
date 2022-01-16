import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { SideNavComponent } from './components/side-nav/side-nav.component';

// Material Libraries
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderDirective } from './global/directives/header.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BannerComponent,
    CarouselComponent,
    ContactUsComponent,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
