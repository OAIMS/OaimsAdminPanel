import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TopSelling } from './interface/topSelling';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {
  public topSelling: TopSelling[] | any;
  public isresponsed: boolean = false;

  constructor(private httpService: HttpService) {
    this.httpService.get('products/topSelling')
      .then((data) => {
        this.topSelling = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Collection Component ==> ", error.messgae)
      })

  }

  ngOnInit(): void {
  }

}
