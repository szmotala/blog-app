import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { PostListComponent } from './blog/post-list/post-list.component';
import { PostDatailComponent } from './blog/post-datail/post-datail.component';
import { PersonalInfoComponent } from './blog/personal-info/personal-info.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    PostDatailComponent,
    PostListComponent,
    PersonalInfoComponent,
    BlogComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  providers: [BlogService],
})
export class BlogModule {}
