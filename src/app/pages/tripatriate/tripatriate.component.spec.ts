import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripatriateComponent } from './tripatriate.component';

describe('TripatriateComponent', () => {
  let component: TripatriateComponent;
  let fixture: ComponentFixture<TripatriateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripatriateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripatriateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
