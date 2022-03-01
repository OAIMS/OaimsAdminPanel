import Base64 from 'src/app/utils/base64';
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

  constructor(private httpService: HttpService, private base64: Base64) { }

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

  async updateBanner(event: any, id: string, index: number) {
    let image = await this.base64.getBase64(event)
    this.httpService.put({ "image": "https://cdn.wallpapersafari.com/7/35/QyH1PO.png" }, `categories/${id}`)
      .then(response => {
        this.isresponsed = false
        this.categoriesBoxes[index].image = image
        this.isresponsed = true
      })
      .catch(error => {
        console.log(error);

      })

  }
}

