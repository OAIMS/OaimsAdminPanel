import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Base64 from 'src/app/utils/base64';
import { Banner } from './interface/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css', '../../global/css/global.css']
})
export class BannerComponent implements OnInit {

  public banners: Banner[] | any;
  public isresponsed: boolean = false;
  constructor(private httpService: HttpService, private base64: Base64) { }

  ngOnInit(): void {
    this.httpService.get('banners')
      .then((data) => {
        this.banners = data;
        this.isresponsed = true;
      })
      .catch((error) => {
        console.error("Error in Banner Component ==> ", error.messgae)
      })
  }

  async updateBanner(event: any, id: string, index: number) {
    let image = await this.base64.getBase64(event)
    this.httpService.put({ "image": "https://cdn.wallpapersafari.com/7/35/QyH1PO.png" }, `banners/${id}`)
      .then(response => {
        this.isresponsed = false
        this.banners[index].image = image
        this.isresponsed = true
      })
      .catch(error => {
        console.log(error);

      })

  }

}
