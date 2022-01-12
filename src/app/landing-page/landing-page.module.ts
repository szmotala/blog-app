import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { BlogService } from '../blog/blog.service';
import { HeroComponent } from './hero/hero.component';
import { BlogPrevComponent } from './blog-prev/blog-prev.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    BlogPrevComponent,
    AboutMeComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [BlogService],
  exports: [ContactComponent],
})
export class LandingPageModule {}
