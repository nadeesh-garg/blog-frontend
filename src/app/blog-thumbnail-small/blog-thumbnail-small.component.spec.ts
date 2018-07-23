import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThumbnailSmallComponent } from './blog-thumbnail-small.component';

describe('BlogThumbnailSmallComponent', () => {
  let component: BlogThumbnailSmallComponent;
  let fixture: ComponentFixture<BlogThumbnailSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogThumbnailSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThumbnailSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
