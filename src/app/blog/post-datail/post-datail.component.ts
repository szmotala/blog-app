import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post-datail',
  templateUrl: './post-datail.component.html',
  styleUrls: ['./post-datail.component.scss'],
})
export class PostDatailComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
