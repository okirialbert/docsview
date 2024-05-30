import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthToRelComponent } from './auth-to-rel.component';

describe('AuthToRelComponent', () => {
  let component: AuthToRelComponent;
  let fixture: ComponentFixture<AuthToRelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthToRelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthToRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
