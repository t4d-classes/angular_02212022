import { Component, OnInit } from '@angular/core';

import { ConsoleLoggerService } from '../../../shared/services/console-logger.service';
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

  constructor(
    private colorsSvc: ColorsService,
    private logSvc: ConsoleLoggerService,
  ) { }

  ngOnInit(): void {
    this.logSvc.log("color home");

    // this.colors = this.colorsSvc.all();

    this.colorsSvc.all().subscribe({
      next: colors => this.colors = colors,
    });
  }

  doAddColor(color: NewColor) {
    //this.colors = this.colorsSvc.append(color).all();
  }

}
