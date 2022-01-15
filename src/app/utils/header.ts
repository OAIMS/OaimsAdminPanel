import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class Header {

  constructor(
  ) { }
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'x-auth-token': sessionStorage.getItem('token') || ""
  }

  // Defining Request Header
  requestOptions = {
    headers: new HttpHeaders(this.headers)
  };

  // Function to get the base64 string agaist a given picture
  getRequestOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'x-auth-token': sessionStorage.getItem('token') || ""
      })
    };
  }
}
