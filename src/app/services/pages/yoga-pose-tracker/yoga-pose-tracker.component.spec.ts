import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaPoseTrackerComponent } from './yoga-pose-tracker.component';

describe('YogaPoseTrackerComponent', () => {
  let component: YogaPoseTrackerComponent;
  let fixture: ComponentFixture<YogaPoseTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaPoseTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaPoseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
