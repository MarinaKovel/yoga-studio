import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationSessionComponent } from './meditation-session.component';

describe('MeditationSessionComponent', () => {
  let component: MeditationSessionComponent;
  let fixture: ComponentFixture<MeditationSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditationSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditationSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
