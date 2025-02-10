import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaSessionComponent } from './yoga-session.component';

describe('YogaSessionComponent', () => {
  let component: YogaSessionComponent;
  let fixture: ComponentFixture<YogaSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
