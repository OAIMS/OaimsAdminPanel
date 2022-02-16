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
import { CategoriesBoxesComponent } from './components/categories-boxes/categories-boxes.component';
import { CollectionComponent } from './components/collection/collection.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CategorySubcategoryComponent } from './components/category-subcategory/category-subcategory.component';
import { MatCardModule } from '@angular/material/card';
import { AddProductsComponent } from './components/modals/add-products/add-products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BannerComponent,
    CarouselComponent,
    ContactUsComponent,
    HeaderDirective,
    CategoriesBoxesComponent,
    CollectionComponent,
    TopSellingComponent,
    FeaturedProductsComponent,
    AllProductsComponent,
    SingleProductComponent,
    CategorySubcategoryComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
