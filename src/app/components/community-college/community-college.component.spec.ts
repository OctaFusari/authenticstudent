import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCollegeComponent } from './community-college.component';

describe('CommunityCollegeComponent', () => {
  let component: CommunityCollegeComponent;
  let fixture: ComponentFixture<CommunityCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCollegeComponent]
    });
    fixture = TestBed.createComponent(CommunityCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
