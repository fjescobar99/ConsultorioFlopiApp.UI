import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioPageComponent } from './consultorio-page.component';

describe('ConsultorioPageComponent', () => {
  let component: ConsultorioPageComponent;
  let fixture: ComponentFixture<ConsultorioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultorioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
