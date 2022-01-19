import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  //objekty zawierające listy postów
  posts: Observable<Post[]>;
  filteredPosts: Observable<Post[]>;

  //zmienne przechowujące kategorie
  categories: string[] = [];
  category: string;

  //stan listy
  show = true;

  //ilość kolumn w gridzie
  list_display_col: number = 3;

  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
    this.filteredPosts = this.blogService.getPosts();

    this.blogService
      .getCategoriesList()
      .subscribe((data) => (this.categories = data['categories']));

    this.router.queryParams.subscribe((params) => {
      let param = params['category'];
      if (param) {
        this.category = param.slice(1, -1);
      } else {
        this.category = 'reset';
      }
      this.toggle();
    });

    this.scrollToTop();
    this.titleService.setTitle('Karo | (nie)zwyczajny bog naukowy');
  }

  get refreshList() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;

    setTimeout(() => {
      this.filterItemsByCategory();
    }, 300);
    setTimeout(() => {
      this.show = !this.show;
    }, 300);
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

  filterItemsByCategory() {
    if (this.category != 'reset') {
      this.filteredPosts = this.posts.pipe(
        map((post) => {
          return post.filter((p) => p.category.includes(this.category));
        })
      );
    } else {
      this.filteredPosts = this.posts;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
