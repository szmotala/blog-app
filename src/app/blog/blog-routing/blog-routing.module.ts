import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPostComponent } from '../full-post/full-post.component';
import { PostListComponent } from '../post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: FullPostComponent,
    data: { depth: 3 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
