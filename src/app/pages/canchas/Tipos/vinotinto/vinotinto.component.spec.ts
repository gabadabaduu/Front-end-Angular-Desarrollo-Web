import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinotintoComponent } from './vinotinto.component';

describe('VinotintoComponent', () => {
  let component: VinotintoComponent;
  let fixture: ComponentFixture<VinotintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinotintoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinotintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
