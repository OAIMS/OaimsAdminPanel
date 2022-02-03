import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CategoriesBox } from './interface/categoriesBox';

@Component({
  selector: 'app-categories-boxes',
  templateUrl: './categories-boxes.component.html',
  styleUrls: ['./categories-boxes.component.css']
})
export class CategoriesBoxesComponent implements OnInit {

  public categoriesBoxes: CategoriesBox[] | any
  public isresponsed: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('categories')
      .then((data) => {
        this.categoriesBoxes = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Categories Box Component ==> ", error.messgae)
      })
  }
}

