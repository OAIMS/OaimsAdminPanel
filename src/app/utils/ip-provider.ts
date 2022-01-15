import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpProvider {
  ip: string = "https://oaimsadminpanel.herokuapp.com/api";

  constructor() { }

  getHostIp() {
    return this.ip;
  }
}
