import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipetizioniComponent } from './ripetizioni.component';

describe('RipetizioniComponent', () => {
  let component: RipetizioniComponent;
  let fixture: ComponentFixture<RipetizioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipetizioniComponent]
    });
    fixture = TestBed.createComponent(RipetizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
