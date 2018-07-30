import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRedirectComponent } from './admin-redirect.component';

describe('AdminRedirectComponent', () => {
  let component: AdminRedirectComponent;
  let fixture: ComponentFixture<AdminRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
