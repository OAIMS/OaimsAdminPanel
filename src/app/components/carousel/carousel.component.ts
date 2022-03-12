import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Base64 from 'src/app/utils/base64';
import { Carousel } from './interface/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../global/css/global.css'],
})
export class CarouselComponent implements OnInit {
  public banners: Carousel[] | any;
  public isresponsed: boolean = false;
  constructor(private httpService: HttpService, private base64: Base64) {}

  ngOnInit(): void {
    this.httpService
      .get('carousels')
      .then((data) => {
        this.banners = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error('Error in Banner Component ==> ', error.messgae);
      });
  }

  async updateCarousel(event: any, id: string, index: number) {
    let image = await this.base64.getBase64(event);
    this.httpService
      .put(`carousels/${id}`, event)
      .then((response) => {
        this.isresponsed = false;
        this.banners[index].image = image;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
