import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTphcComponent } from './pre-tphc.component';

describe('PreTphcComponent', () => {
  let component: PreTphcComponent;
  let fixture: ComponentFixture<PreTphcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreTphcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreTphcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
