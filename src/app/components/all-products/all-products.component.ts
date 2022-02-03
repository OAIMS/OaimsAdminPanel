import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { AddProductsComponent } from '../modals/add-products/add-products.component';
import { AllProducts } from './interface/allProducts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public allProductsData: AllProducts[] | any;
  public isresponsed: boolean = false;

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog
  ) {
    this.httpService.get('products?page=1&limit=10')
      .then((data) => {
        this.allProductsData = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Collection Component ==> ", error.messgae)
      })
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProductsComponent,{
      width:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
