import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGrocerlistComponent } from './header-grocerlist.component';

describe('HeaderGrocerlistComponent', () => {
  let component: HeaderGrocerlistComponent;
  let fixture: ComponentFixture<HeaderGrocerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGrocerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderGrocerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
