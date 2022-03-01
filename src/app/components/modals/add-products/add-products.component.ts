import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import '@simonwep/pickr/dist/themes/nano.min.css';
import Pickr from '@simonwep/pickr';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  count: any = [...Array(1).keys()];
  productCount: any = [...Array(1).keys()];
  testTypes: string[] = ['Cotton', 'Mvs', 'Pvt', 'WashnWear', 'Boski'];
  prices: any = [];
  sizes: any = [];
  images: any = [];
  colors: any = [];

  testNames: any = {
    Cotton: ['96-88', 'sotton'],
    Mvs: ['26-18', 'pvt'],
    Pvt: ['18-18'],
    WashnWear: ['100-80', '64-64', '58-58'],
    Boski: ['chinaBoski'],
  };

  currentTestType = this.testTypes[0];
  currentTestNames = this.testNames[this.currentTestType];

  testForm: any = this.fb.group({
    testType: this.currentTestType,
    testName: this.currentTestNames[0],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  changeTestType() {
    let newTestType = this.testForm.get('testType').value;
    if (newTestType != this.currentTestType) {
      this.currentTestType = newTestType;
      this.currentTestNames = this.testNames[this.currentTestType];

      // Set test name to be the first thing in the testNames array for this test type.
      this.testForm.patchValue({
        testName: this.currentTestNames[0],
      });
    }
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
    this.prices[i] = price;
    console.log(this.prices);
  }

  addSizes(size: any, i: any) {
    this.sizes[i] = size;
    console.log(this.sizes);
  }

  addColor(color: any, i: any) {
    this.colors[i] = color;
    console.log(this.colors);
  }

  addImages(image: any, i: any) {
    this.images[i] = image;
    console.log(this.images);
  }
}
