import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesBoxesComponent } from './components/categories-boxes/categories-boxes.component';
import { CollectionComponent } from './components/collection/collection.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { CategorySubcategoryComponent } from './components/category-subcategory/category-subcategory.component';
import { AddProductsComponent } from './components/modals/add-products/add-products.component';
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: SideNavComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'categories-box', component: CategoriesBoxesComponent },
  { path: 'collection-data', component: CollectionComponent },
  { path: 'top-selling', component: TopSellingComponent },
  { path: 'featured-products', component: FeaturedProductsComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'categories-subcategories', component: CategorySubcategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
