import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpProvider {
  // ip: string = "https://sehat.herokuapp.com";
  ip: string = "http://localhost:3000";
  // pythonIp: string = "https://sehat-ai.herokuapp.com";
  pythonIp: string = "http://127.0.0.1:5000";
  constructor() { }

  getHostIp() {
    return this.ip;
  }
}
