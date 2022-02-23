import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from '../../models/colors';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";

  colors: Color[] = [];

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit(): void {
    this.colors = this.colorsSvc.all();
  }

  doAddColor(color: NewColor) {
    this.colors = this.colorsSvc.append(color).all();
  }

}
