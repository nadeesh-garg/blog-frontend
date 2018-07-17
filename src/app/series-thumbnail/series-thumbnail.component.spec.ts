import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesThumbnailComponent } from './series-thumbnail.component';

describe('SeriesThumbnailComponent', () => {
  let component: SeriesThumbnailComponent;
  let fixture: ComponentFixture<SeriesThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
