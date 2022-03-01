import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersData : any;
  isresponsed: boolean = false

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('orders?page=1&limit=1')
      .then((data) => {
        this.ordersData = data[0];
        console.log("the collection data is:", this.ordersData);
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Collection Component ==> ", error.messgae)
      })
  }

}


