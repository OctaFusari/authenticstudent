import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScuoleSuperioriComponent } from './scuole-superiori.component';

describe('ScuoleSuperioriComponent', () => {
  let component: ScuoleSuperioriComponent;
  let fixture: ComponentFixture<ScuoleSuperioriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScuoleSuperioriComponent]
    });
    fixture = TestBed.createComponent(ScuoleSuperioriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
