import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Header from '../utils/header';
import { IpProvider } from '../utils/ip-provider';
import SnackBar from '../utils/snakbar';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    protected _snack: SnackBar,
    private hostAddress: IpProvider,
    private header: Header,
    private http: HttpClient
  ) { }

  post(payload: object, route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${this.hostAddress.getHostIp()}/${route}`, payload,
        // Header X_AUTH_TOKEN
        this.header.getRequestOptions())
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data)
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this._snack.showSnackBar("Soory, You dont have any Medicine", "")
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data)
        })
        .catch((err) => {
          // Debugger
          console.log(err)
          // Error PopUp
          this._snack.showSnackBar(err.error, "")
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err)
        })
    })
  }

  getWithParams(route: string, id: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.hostAddress.getHostIp()}/${route}/${id}`,
        // Header X_AUTH_TOKEN
        this.header.getRequestOptions())
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data)
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            console.log("Hello")
            this._snack.showSnackBar("Soory, There is no review", "")
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data)
        })
        .catch((err) => {
          // Debugger
          console.log(err)
          // Error PopUp
          this._snack.showSnackBar(err.error, "")
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err)
        })
    })
  }

  get(route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.hostAddress.getHostIp()}/${route}`,
        // Header X_AUTH_TOKEN
        this.header.getRequestOptions())
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data)
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            console.log("Hello")
            this._snack.showSnackBar("Soory, There is no review", "")
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data)
        })
        .catch((err) => {
          // Debugger
          console.log(err)
          // Error PopUp
          this._snack.showSnackBar(err.error, "")
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err)
        })
    })
  }
}
