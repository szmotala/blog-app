import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { PostListComponent } from './blog/post-list/post-list.component';
import { PostDatailComponent } from './blog/post-datail/post-datail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog/blog-routing/blog-routing.module';

@NgModule({
  declarations: [PostDatailComponent, PostListComponent, BlogComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  providers: [BlogService],
})
export class BlogModule {}
