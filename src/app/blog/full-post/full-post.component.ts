import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss'],
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
export class FullPostComponent implements OnInit {
  nextPost: Post;
  prevPost: Post;
  post: Post;
  show: boolean = true;
  id: string;

  constructor(
    private router: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.toggle();
    });

    this.scrollToTop();
  }

  //detekcja zmiany postu i wywołanie animacji
  get postChange() {
    return this.show ? 'show' : 'hide';
  }

  //Funkcja filtrująca
  getNextPost(p: Post) {
    return p.id === this.id;
  }

  //Refresh
  toggle() {
    this.show = !this.show;
    setTimeout(() => {
      this.blogService.getPostData(this.id).subscribe((data) => {
        this.post = data;
      });

      this.blogService.getPosts().subscribe((items) => {
        this.nextPost = items[items.findIndex((p) => this.getNextPost(p)) - 1];
        this.prevPost = items[items.findIndex((p) => this.getNextPost(p)) + 1];
      });
    }, 300);

    setTimeout(() => {
      this.show = !this.show;
    }, 300);
    this.scrollToTop();
  }

  //scroll
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
