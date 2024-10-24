import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenDataComponent } from './forgotten-data.component';

describe('ForgottenDataComponent', () => {
  let component: ForgottenDataComponent;
  let fixture: ComponentFixture<ForgottenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgottenDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgottenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
