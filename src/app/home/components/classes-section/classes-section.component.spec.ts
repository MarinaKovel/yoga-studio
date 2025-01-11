import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesSectionComponent } from './classes-section.component';

describe('ClassesSectionComponent', () => {
  let component: ClassesSectionComponent;
  let fixture: ComponentFixture<ClassesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
