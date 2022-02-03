import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-subcategory',
  templateUrl: './category-subcategory.component.html',
  styleUrls: ['./category-subcategory.component.css']
})
export class CategorySubcategoryComponent implements OnInit {
  public categoriesSubcategoriesData: CategorySubcategoryComponent[] | any;
  public isresponsed: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('sub-categories/category')
    .then((data) => {
      this.categoriesSubcategoriesData = data;
      this.isresponsed = true;
    })
    .catch((error) => {
      console.error("Error in Collection Component ==> ", error.messgae)
    })
  }

}
