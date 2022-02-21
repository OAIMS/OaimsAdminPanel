import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ContactUs } from './interface/contactus';
import { MatTableDataSource } from '@angular/material/table';

export interface UserVitals{
  _id: String
  name: String,
  email: String,
  subject: String,
  comments: String,
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  public contactData = []
  public isresponsed: boolean = false;
  @ViewChild('TABLE') table: ElementRef | any;
  displayedColumns: string[] = ['_id', 'name', 'email', 'subject', 'comment'];

  dataSource = new MatTableDataSource<any>(this.contactData);

  ngOnInit(): void {
    this.httpService.get('contactUs')
      .then((data) => {
        this.contactData = data;
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data);
        console.log("the collection data is:", this.contactData);
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
