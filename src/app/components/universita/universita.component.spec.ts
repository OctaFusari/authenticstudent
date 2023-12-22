import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitaComponent } from './universita.component';

describe('UniversitaComponent', () => {
  let component: UniversitaComponent;
  let fixture: ComponentFixture<UniversitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversitaComponent]
    });
    fixture = TestBed.createComponent(UniversitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
