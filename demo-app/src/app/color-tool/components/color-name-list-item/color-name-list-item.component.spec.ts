import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNameListItemComponent } from './color-name-list-item.component';

describe('ColorNameListItemComponent', () => {
  let component: ColorNameListItemComponent;
  let fixture: ComponentFixture<ColorNameListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNameListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
