import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaPoseListComponent } from './yoga-pose-list.component';

describe('YogaPoseListComponent', () => {
  let component: YogaPoseListComponent;
  let fixture: ComponentFixture<YogaPoseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaPoseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaPoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
