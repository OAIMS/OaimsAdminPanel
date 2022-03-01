import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-subcategory',
  templateUrl: './category-subcategory.component.html',
  styleUrls: ['./category-subcategory.component.css'],
})
export class CategorySubcategoryComponent implements OnInit {
  public categoriesSubcategoriesData: CategorySubcategoryComponent[] | any;
  public isresponsed: boolean = false;
  panelOpenState = false;

  isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;

  constructor(
    private httpService: HttpService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.httpService
      .get('sub-categories/category')
      .then((data) => {
        this.categoriesSubcategoriesData = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error('Error in Collection Component ==> ', error.messgae);
      });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  deleteSubCategory(id: string) {
    this.httpService.delete(id, 'sub-categories/').then((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
