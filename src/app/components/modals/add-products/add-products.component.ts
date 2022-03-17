import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import '@simonwep/pickr/dist/themes/nano.min.css';
import Pickr from '@simonwep/pickr';
import { CategorySubcategoryComponent } from '../../category-subcategory/category-subcategory.component';
import Base64 from 'src/app/utils/base64';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  count: any = [...Array(1).keys()];
  productCount: any = [...Array(1).keys()];
  public categoriesSubcategoriesData: CategorySubcategoryComponent[] | any;
  // testTypes: string[] = ['Cotton', 'Mvs', 'Pvt', 'WashnWear', 'Boski'];
  prices: any = [];
  sizes: any = [];
  images: any = [];
  colors: any = [];
  category: any = [];
  subCategory: any = [];
  selectedCategory: any;
  selectedSubCategory: any;
  radioOption: any;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public base64: Base64
  ) {}

  ngOnInit(): void {
    this.httpService
      .get('sub-categories/category')
      .then((data) => {
        this.categoriesSubcategoriesData = data;
        console.log(
          'categoriesSubcategoriesData',
          this.categoriesSubcategoriesData
        );
      })
      .catch((error) => {
        console.error('Error in Collection Component ==> ', error.messgae);
      });
  }

  getSubCategories(event: any) {
    console.log(event);
    this.subCategory.length = 0;
    this.selectedCategory = event;
    this.categoriesSubcategoriesData.map((data: any) => {
      if (event == data.categoryName) {
        console.log(data.subcategories);
        this.subCategory = data.subcategories;
      }
    });
  }

  addCount() {
    return this.count.length++;
  }

  lessCount() {
    if (this.count.length > 1) {
      return this.count.length--;
    }
    return this.count.length;
  }

  addproductCount(price: string, size: string) {
    return this.productCount.length++;
  }

  lessproductCount(index: number) {
    this.prices.splice(index - 1, 1);
    this.sizes.splice(index - 1, 1);
    if (this.productCount.length > 1) {
      return this.productCount.length--;
    } else {
      return this.productCount.length;
    }
  }

  addPrice(price: any, i: any) {
    this.prices[i] = parseInt(price);
    console.log(this.prices);
  }

  addSizes(size: any, i: any) {
    this.sizes[i] = parseInt(size);
    console.log(this.sizes);
  }

  addColor(color: any, i: any) {
    this.colors[i] = color;
    console.log(this.colors);
  }

  addImages(image: any, i: any) {
    console.log(image);
    // service call karni hai
    // uska response
    // let res
    // this.images[i] = res;
    this.httpService.uploadImage(image, 'products/upload').then((data) => {
      this.images[i] = data.payload;
    });
    console.log(this.images);
  }

  selectSubCategories(event: any) {
    this.selectedSubCategory = event;
  }

  radioOptions(event: any) {
    this.radioOption = event;
  }

  saveProduct(name: string, quantity: string, description: string) {
    console.log(
      name,
      parseInt(quantity),
      description,
      this.prices,
      this.sizes,
      this.images,
      this.colors,
      this.selectedCategory,
      this.selectedSubCategory,
      this.radioOption
    );
    let obj = {
      name: name,
      description: description,
      price: this.prices,
      size: this.sizes,
      images: this.images,
      quantity: parseInt(quantity),
      isFeatured: true,
      subCategory: this.selectedSubCategory,
      color: this.colors,
      type: this.radioOption.toLowerCase(),
    };
    this.httpService.post(obj, 'products');
  }
}
