import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmcRelComponent } from './omc-rel.component';

describe('OmcRelComponent', () => {
  let component: OmcRelComponent;
  let fixture: ComponentFixture<OmcRelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmcRelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmcRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
