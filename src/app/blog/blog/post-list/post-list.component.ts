import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { BlogService } from 'src/app/blog/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
