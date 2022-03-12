import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import Base64 from 'src/app/utils/base64';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  images: any;
  count: any = [...Array(1).keys()];

  constructor(private base64: Base64, private httpService: HttpService) {}

  ngOnInit(): void {}

  saveCategory(name: any) {
    console.log(name);

    let obj = {
      categoryName: name,
      image: this.images,
    };
    console.log('the object is', obj);
    this.httpService.post(obj, 'categories');
  }

  async addImages(event: any) {
    this.images = await this.base64.getBase64(event);
    console.log('Images', this.images);
  }
}
