import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { SharedModule } from '../shared/shared.module';

import { PostListComponent } from './post-list/post-list.component';
import { PostDatailComponent } from './post-datail/post-datail.component';
import { BlogRoutingModule } from './blog-routing/blog-routing.module';
import { FullPostComponent } from './full-post/full-post.component';

@NgModule({
  declarations: [PostDatailComponent, PostListComponent, FullPostComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  providers: [BlogService],
})
export class BlogModule {}
