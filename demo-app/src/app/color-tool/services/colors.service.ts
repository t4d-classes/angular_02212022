import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Color, NewColor } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }

  public all() {
    return this.http.get<Color[]>(this.collectionUrl());
  }

  public append(color: NewColor) {
    return this.http.post<Color>(this.collectionUrl(), color);
  }

  private collectionUrl() {
    return environment.apiUrl + "/colors";
  }
}
