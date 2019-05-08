import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';

import { HttpService } from './http.service';
import { Error } from '../interfaces/error.interface';
import { ServerResponse } from '../interfaces/server-response.interface';
import { AppConstants } from '../app.constants';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { HelperService } from './helper.service';

@Injectable()

export class BaseService {
  constructor(public http: HttpService,
    public errorHandler: CustomErrorHandlerService,
    public helperService: HelperService) {
  }
  get(url) {
    // Helper service to start ng2-slim-loading-bar progress bar
    this.helperService.startLoader();
    return this.http.get(url)
      .subscribe(
        (res: Response) => this.handleResponse(res),
        (error: Response) => throwError(this.errorHandler.tryParseError(error))
      )
      .add(() => this.helperService.stopLoader());
  }

  post(url, postBody: any, options?: RequestOptions) {
    this.helperService.startLoader();
    if (options) {
      return this.http.post(url, postBody, options)
        .subscribe(
          (res: Response) => this.handleResponse(res),
          (error: Response) => throwError(error)
        )
        .add(() => this.helperService.stopLoader())
    } else {
      return this.http.post(url, postBody)
        .subscribe(
          (res: Response) => this.handleResponse(res),
          (error: Response) => throwError(error)
        )
        .add(() => this.helperService.stopLoader());
    }
  }
  delete(url, postBody: any) {
    this.helperService.startLoader();
    return this.http.delete(url)
      .subscribe(
        (res: Response) => this.handleResponse(res),
        (error: Response) => throwError(error)
      )
      .add(() => this.helperService.stopLoader());
  }
  put(url, putData) {
    this.helperService.startLoader();
    return this.http.put(url, putData)
      .subscribe(
        (res: Response) => this.handleResponse(res),
        (error: Response) => throwError(error)
      )
      .add(() => this.helperService.stopLoader());
  }


  upload(url: string, file: File) {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('files', file, file.name);
    }
    this.helperService.addContentTypeHeader = false;
    return this.post(url, formData);
  }


  formUrlParam(url, data) {
    let queryString: string = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }

  handleResponse(res: Response): ServerResponse {
    // My API sends a new jwt access token with each request,
    // so store it in the local storage, replacing the old one.
    // this.refreshToken(res);
    const data = res.json();
    if (data.error) {
      const error: Error = { error: data.error, message: data.message };
      throw new Error(this.errorHandler.parseCustomServerErrorToString(error));
    } else {
      return data;
    }
  }

  refreshToken(res: Response) {
    const token = res.headers.get(AppConstants.accessTokenServer);
    if (token) {
      localStorage.setItem(AppConstants.accessTokenLocalStorage, `${token}`);
    }
  }
}