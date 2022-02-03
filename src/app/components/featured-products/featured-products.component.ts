import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  public featuredProductsData : FeaturedProductsComponent[] | any;
  public isresponsed: boolean = false;
  constructor(private httpService: HttpService) {

    this.httpService.get('products/featured')
    .then((data) => {
      this.featuredProductsData = data;
      this.isresponsed = true;
    })
    .catch((error) => {
      console.error("Error in Collection Component ==> ", error.messgae)
    })
  }

  ngOnInit(): void {
  }

}
