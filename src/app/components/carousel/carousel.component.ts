import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Carousel } from './interface/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../global/css/global.css']
})
export class CarouselComponent implements OnInit {

  public banners: Carousel[] | any;
  public isresponsed: boolean = false;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('carousels')
      .then((data) => {
        this.banners = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Banner Component ==> ", error.messgae)
      })
  }

}
