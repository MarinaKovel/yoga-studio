import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTabComponent } from './classes-tab.component';

describe('ClassesTabComponent', () => {
  let component: ClassesTabComponent;
  let fixture: ComponentFixture<ClassesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
