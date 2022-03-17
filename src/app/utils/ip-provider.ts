import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpProvider {
  // ip: string = 'https://api.oaims-tex.com/api';
  ip: string = 'http://192.168.166.57:8080/api';
  constructor() {}

  getHostIp() {
    return this.ip;
  }
}
