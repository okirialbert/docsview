import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendcardComponent } from './trendcard.component';

describe('TrendcardComponent', () => {
  let component: TrendcardComponent;
  let fixture: ComponentFixture<TrendcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
