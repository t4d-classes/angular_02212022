import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

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
  errorMessage = ""

  constructor(
    private colorsSvc: ColorsService,
    private logSvc: ConsoleLoggerService,
  ) { }

  ngOnInit(): void {
    this.logSvc.log("color home");

    // this.colors = this.colorsSvc.all();

    this.colorsSvc.all().subscribe({
      next: colors => this.colors = colors,
      error: err => this.errorMessage = err,
    });
  }

  doAddColor(color: NewColor) {
    // calling the rest api to append a color
    this.colorsSvc
      .append(color)
      .pipe(
        switchMap(() => this.colorsSvc.all())
      )
      .subscribe({
        next: colors => this.colors = colors,
        error: err => this.errorMessage = err,
      });
  }

}
