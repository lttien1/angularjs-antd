import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


@Injectable({
  providedIn: 'root',
})

export class ContactService {
  constructor(private http: HttpService) { }

  private getContactAndFieldUrl = 'https://apistaging.myhub.vn/api/UserProfiles/getContactAndField';

  getContactAndFields() {
    return this.http.post(this.getContactAndFieldUrl);
  }
}
