import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpProvider {
  ip: string = 'http://oaimsbackendnodejs-env.eba-vtqw8fns.us-east-1.elasticbeanstalk.com/api';

  constructor() {}

  getHostIp() {
    return this.ip;
  }
}
