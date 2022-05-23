import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { AddProductsComponent } from '../modals/add-products/add-products.component';
import { DeletePopupComponent } from '../modals/delete-popup/delete-popup.component';
import { AllProducts } from './interface/allProducts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public allProductsData: AllProducts[] | any;
  public isresponsed: boolean = false;
  public dialogValue: string | any;

  constructor(private httpService: HttpService, public dialog: MatDialog,) {
    this.httpService
      .get('products')
      .then((data) => {
        this.allProductsData = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error('Error in Collection Component ==> ', error.messgae);
      });
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AddProductsComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteFeatured(id: string) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: `Are you sure you want to delete?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.dialogValue = result.data;

      if (this.dialogValue == 'You Confirmed') {
        this.httpService.delete(id, 'products').then((data) => {
          console.log(data);
          this.ngOnInit();
        });
      } else {
        console.log('You dont wanted to delete this');
      }
    });
  }
}
