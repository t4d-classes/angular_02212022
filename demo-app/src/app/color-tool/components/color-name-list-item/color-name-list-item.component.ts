import { Component, OnInit, Input } from '@angular/core';

import { Color } from '../../models/colors';

@Component({
  selector: '.app-color-name-list-item',
  templateUrl: './color-name-list-item.component.html',
  styleUrls: ['./color-name-list-item.component.css']
})
export class ColorNameListItemComponent implements OnInit {

  @Input()
  color!: Color;

  constructor() { }

  ngOnInit(): void {
  }

}
