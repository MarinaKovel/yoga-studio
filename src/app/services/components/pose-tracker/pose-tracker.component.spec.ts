import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseTrackerComponent } from './pose-tracker.component';

describe('PoseTrackerComponent', () => {
  let component: PoseTrackerComponent;
  let fixture: ComponentFixture<PoseTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoseTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
