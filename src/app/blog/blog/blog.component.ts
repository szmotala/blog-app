import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  categories: string[] = [];
  currentCategory: string = 'reset';
  @ViewChild(PostListComponent) blogList: PostListComponent;

  constructor(
    private router: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.scrollToTop();
    this.blogService
      .getCategoriesList()
      .subscribe((data) => (this.categories = data['categories']));

    this.router.queryParams.subscribe((params) => {
      if (this.router.snapshot.queryParams['category']) {
        this.currentCategory = JSON.parse(params['category']);
      } else {
        this.currentCategory = 'reset';
      }
    });
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
