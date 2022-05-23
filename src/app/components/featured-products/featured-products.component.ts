import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { DeletePopupComponent } from '../modals/delete-popup/delete-popup.component';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  public featuredProductsData: FeaturedProductsComponent[] | any;
  public isresponsed: boolean = false;
  public dialogValue: string | any;

  constructor(private httpService: HttpService, public dialog: MatDialog) {
    this.httpService
      .get('products/featured')
      .then((data) => {
        this.featuredProductsData = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error('Error in Collection Component ==> ', error.messages);
      });
  }

  ngOnInit(): void {}

  deleteFeatured(id: string) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: `Are you sure you want to delete?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.dialogValue = result.data;

      if (this.dialogValue == 'You Confirmed') {
        this.httpService.delete(id, 'products/featured/remove').then((data) => {
          console.log(data);
          this.ngOnInit();
        });
      } else {
        console.log('You dont wanted to delete this');
      }
    });
  }
}
