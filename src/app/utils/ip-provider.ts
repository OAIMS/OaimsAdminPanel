import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpProvider {
  ip: string = 'https://api.oaims-tex.com/api';
  constructor() {}

  getHostIp() {
    return this.ip;
  }
}
