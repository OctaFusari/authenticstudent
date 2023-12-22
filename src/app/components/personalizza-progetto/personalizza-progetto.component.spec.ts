import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizzaProgettoComponent } from './personalizza-progetto.component';

describe('PersonalizzaProgettoComponent', () => {
  let component: PersonalizzaProgettoComponent;
  let fixture: ComponentFixture<PersonalizzaProgettoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalizzaProgettoComponent]
    });
    fixture = TestBed.createComponent(PersonalizzaProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
