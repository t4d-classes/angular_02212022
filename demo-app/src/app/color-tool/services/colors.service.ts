import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color, NewColor } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private _colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  constructor(private http: HttpClient) { }

  // public all() {
  //   return [ ...this._colors ];
  // }

  // public refresh() {
  //   // get the data from the rest api
  //   // set the date on _colors

  // }

  public all() {
    return this.http.get<Color[]>('http://localhost:3060/colors');
  }

  public append(color: NewColor) {
    this._colors = [
      ...this._colors,
      {
        ...color,
        id: Math.max(...this._colors.map(c => c.id), 0) + 1,
      },
    ];

    return this;
  }
}
