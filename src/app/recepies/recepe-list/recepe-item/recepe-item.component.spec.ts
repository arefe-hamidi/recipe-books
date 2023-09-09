import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeItemComponent } from './recepe-item.component';

describe('RecepeItemComponent', () => {
  let component: RecepeItemComponent;
  let fixture: ComponentFixture<RecepeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepeItemComponent]
    });
    fixture = TestBed.createComponent(RecepeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
