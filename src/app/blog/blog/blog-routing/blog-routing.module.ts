import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog.component';
import { PostDatailComponent } from '../post-datail/post-datail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  { path: 'post/:id', component: PostDatailComponent, data: { depth: 3 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
