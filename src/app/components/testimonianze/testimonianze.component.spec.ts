import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonianzeComponent } from './testimonianze.component';

describe('TestimonianzeComponent', () => {
  let component: TestimonianzeComponent;
  let fixture: ComponentFixture<TestimonianzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonianzeComponent]
    });
    fixture = TestBed.createComponent(TestimonianzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
