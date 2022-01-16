import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { BlogService } from 'src/app/blog/blog.service';
import { map } from 'rxjs';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('0.3s ease')),
      transition('hide => show', animate('0.3s ease')),
    ]),
  ],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  filteredPosts: Observable<Post[]>;
  currentCategory: string;

  show = true;
  list_display_col: number = 3;

  @Input() category: string;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
    this.filteredPosts = this.blogService.getPosts();
    this.toggle(this.category);
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle(category: string) {
    if (this.currentCategory != category) {
      this.show = !this.show;

      setTimeout(() => {
        this.filterItemsByCategory(category);
      }, 300);
      setTimeout(() => {
        this.show = !this.show;
      }, 300);
      this.currentCategory = category;
    }
  }

  changeLayout(columns: number) {
    if (this.list_display_col != columns) {
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
        this.list_display_col = columns;
      }, 300);
    }
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
