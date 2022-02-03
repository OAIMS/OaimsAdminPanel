import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SingleProducts } from './interface/singleProducts';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  public singleProductData: SingleProducts[] | any;
  public isresponsed: boolean = false;

  constructor(private httpService: HttpService) {
    this.httpService.get('products?page=1&limit=10')
    .then((data) => {
      this.singleProductData = data;
      this.isresponsed = true;
    })
    .catch((error) => {
      console.error("Error in Collection Component ==> ", error.messgae)
    })
   }

  ngOnInit(): void {

  }

}
