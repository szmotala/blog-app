import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { BlogService } from 'src/app/blog/blog.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  category: string;
  filteredPosts: Observable<Post[]>;

  constructor(private blogService: BlogService) {}

  categories = ['fizyka', 'biofizyka', 'nanocząstki'];

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
    this.filteredPosts = this.blogService.getPosts();
  }

  filterItemsByCategory(category: string) {
    if (category != 'reset') {
      this.filteredPosts = this.posts.pipe(
        map((post) => {
          return post.filter((p) => p.category.includes(category));
        })
      );
    } else {
      this.filteredPosts = this.posts;
    }
  }
}
