import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { Id } from '../../category-subcategory/category-subcategory.component';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css'],
})
export class AddSubcategoryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddSubcategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Id,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    console.log('the data is:', this.data);
  }

  saveSubCategory(name: any) {
    console.log('name is', name);

    let obj = {
      subCategoryName: name,
      category: this.data.categoryId,
    };
    console.log('the objct is ', obj);
    this.httpService.post(obj, 'sub-categories');
  }
}
