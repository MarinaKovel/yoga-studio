import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseListComponent } from './pose-list.component';

describe('PoseListComponent', () => {
  let component: PoseListComponent;
  let fixture: ComponentFixture<PoseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
