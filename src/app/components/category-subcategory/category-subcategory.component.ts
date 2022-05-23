import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AddSubcategoryComponent } from '../modals/add-subcategory/add-subcategory.component';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../modals/delete-popup/delete-popup.component';
export interface Id {
  categoryId: any;
}
@Component({
  selector: 'app-category-subcategory',
  templateUrl: './category-subcategory.component.html',
  styleUrls: ['./category-subcategory.component.css'],
})
export class CategorySubcategoryComponent implements OnInit {
  public categoriesSubcategoriesData: CategorySubcategoryComponent[] | any;
  public isresponsed: boolean = false;
  panelOpenState = false;
  catId: any;
  isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;
  public dialogValue: string | any;

  constructor(
    private httpService: HttpService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
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
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: `Are you sure you want to delete?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.dialogValue = result.data;

      if (this.dialogValue == 'You Confirmed') {
        this.httpService.delete(id, 'sub-categories/').then((data) => {
          console.log(data);
          this.ngOnInit();
        });
      } else {
        console.log('You dont wanted to delete this');
      }
    });
  }

  openDialog(id: any): void {
    const dialogRef = this.dialog.open(AddSubcategoryComponent, {
      width: '550px',
      height: '400px',
      data: { categoryId: id },
    });
    console.log(id);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
