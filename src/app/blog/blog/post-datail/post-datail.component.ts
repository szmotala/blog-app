import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog/blog.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-datail',
  templateUrl: './post-datail.component.html',
  styleUrls: ['./post-datail.component.scss'],
})
export class PostDatailComponent implements OnInit {
  post: Post;

  constructor(
    private router: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  getPost() {
    const id = this.router.snapshot.paramMap.get('id');
    return this.blogService.getPostData(id).subscribe((data) => {
      this.post = data;
    });
  }
}
