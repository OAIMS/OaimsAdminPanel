import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { DeletePopupComponent } from '../modals/delete-popup/delete-popup.component';
import { Collection } from './interface/collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  public collectionData: Collection[] | any;
  public isresponsed: boolean = false;
  public dialogValue : string | any;
  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService
      .get('products/collection?type=collection')
      .then((data) => {
        this.collectionData = data;
        console.log('the contact us data is:', this.collectionData);
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error('Error in Collection Component ==> ', error.messgae);
      });
  }

  deleteCollection(id: string) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: `Are you sure you want to delete?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.dialogValue = result.data;

      if(this.dialogValue=='You Confirmed'){
      this.httpService.delete(id, 'products/collection').then((data) => {
        console.log(data);
        this.ngOnInit();
      });
      }
      else{
        console.log('You dont wanted to delete this')
      }
    });


  }


}
