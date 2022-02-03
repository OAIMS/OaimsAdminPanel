import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Collection } from './interface/collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public collectionData: Collection[] | any;
  public isresponsed: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('products/collection?type=summer')
      .then((data) => {
        this.collectionData = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Collection Component ==> ", error.messgae)
      })
  }


}
