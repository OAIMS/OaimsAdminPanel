import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = []
  @ViewChild('TABLE') table: ElementRef | any;
  displayedColumns: string[] = ['_id', 'name', 'email', 'subject', 'comment'];

  dataSource = new MatTableDataSource<any>(this.orders);
  isresponsed: boolean = false

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('orders')
      .then((data) => {
        this.orders = data;
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data);
        console.log("the collection data is:", this.orders);
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Collection Component ==> ", error.messgae)
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


