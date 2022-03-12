import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpProvider {
  // ip: string = 'https://oaims-backend.herokuapp.com/api';
  ip: string = 'http://192.168.18.20:8080/api';

  constructor() {}

  getHostIp() {
    return this.ip;
  }
}
