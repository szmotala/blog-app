import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/blog/post';

@Component({
  selector: 'app-blog-prev',
  templateUrl: './blog-prev.component.html',
  styleUrls: ['./blog-prev.component.scss'],
})
export class BlogPrevComponent implements OnInit {
  latest: Post[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService
      .getPosts()
      .subscribe((items) => (this.latest = items.slice(0, 3)));
  }
}
