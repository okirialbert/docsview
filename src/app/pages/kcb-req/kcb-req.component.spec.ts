import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcbReqComponent } from './kcb-req.component';

describe('KcbReqComponent', () => {
  let component: KcbReqComponent;
  let fixture: ComponentFixture<KcbReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KcbReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KcbReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
