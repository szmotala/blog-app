import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from 'src/app/blog/post';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  latest: Post[];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService
      .getPosts()
      .subscribe((items) => (this.latest = items.slice(0, 3)));
  }
}
