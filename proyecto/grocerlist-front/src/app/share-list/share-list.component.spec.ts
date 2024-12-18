import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareListComponent } from './share-list.component';

describe('ShareListComponent', () => {
  let component: ShareListComponent;
  let fixture: ComponentFixture<ShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
