import { Component, OnInit, ViewChild } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  categories = ['fizyka', 'biofizyka', 'nanocząstki'];
  constructor() {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  @ViewChild(PostListComponent) blogList: PostListComponent;
}
