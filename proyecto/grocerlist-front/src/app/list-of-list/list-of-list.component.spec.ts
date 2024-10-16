import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfListComponent } from './list-of-list.component';

describe('ListOfListComponent', () => {
  let component: ListOfListComponent;
  let fixture: ComponentFixture<ListOfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
