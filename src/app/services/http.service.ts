import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Header from '../utils/header';
import { IpProvider } from '../utils/ip-provider';
import SnackBar from '../utils/snakbar';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    protected _snack: SnackBar,
    private hostAddress: IpProvider,
    private header: Header,
    private http: HttpClient
  ) {}

  post(payload: object, route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(
          `${this.hostAddress.getHostIp()}/${route}`,
          payload,
          // Header X_AUTH_TOKEN
          this.header.getRequestOptions()
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this._snack.showSnackBar('Soory, You dont have any Medicine', '');
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.error, '');
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err);
        });
    });
  }

  getWithParams(route: string, id: string) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(
          `${this.hostAddress.getHostIp()}/${route}/${id}`,
          // Header X_AUTH_TOKEN
          this.header.getRequestOptions()
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            console.log('Hello');
            this._snack.showSnackBar('Soory, There is no review', '');
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.error, '');
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err);
        });
    });
  }

  get(route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(
          `${this.hostAddress.getHostIp()}/${route}`,
          // Header X_AUTH_TOKEN
          this.header.getRequestOptions()
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this._snack.showSnackBar('Soory, There is no Data', '');
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data.payload);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.message, '');
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err);
        });
    });
  }

  put(route: string, image: any) {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    };
    const formData = new FormData();
    formData.append('image', image);
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(
          `${this.hostAddress.getHostIp()}/${route}`,
          // Header X_AUTH_TOKEN
          formData,
          this.header.getRequestOptions()
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this._snack.showSnackBar('Soory, You dont have any Medicine', '');
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data.payload);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.error, '');
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err);
        });
    });
  }

  delete(id: string, route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .delete(
          `${this.hostAddress.getHostIp()}/${route}/${id}`,
          // Header X_AUTH_TOKEN
          this.header.getRequestOptions()
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            this._snack.showSnackBar('Sorry, Item Can Not Be Deleted', '');
          }
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Hurrah Baby
          resolve(data.payload);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.error, '');
          // Change Spnner State
          // this.spin.changeSpinnerState(false)
          // Rejection Baby
          reject(err);
        });
    });
  }
}
