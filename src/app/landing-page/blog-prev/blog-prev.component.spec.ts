import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPrevComponent } from './blog-prev.component';

describe('BlogPrevComponent', () => {
  let component: BlogPrevComponent;
  let fixture: ComponentFixture<BlogPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
