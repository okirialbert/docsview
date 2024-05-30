import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPComponent } from './third-p.component';

describe('ThirdPComponent', () => {
  let component: ThirdPComponent;
  let fixture: ComponentFixture<ThirdPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
