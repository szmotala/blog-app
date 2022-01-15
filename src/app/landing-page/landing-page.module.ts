import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { BlogService } from '../blog/blog.service';
import { HeroComponent } from './hero/hero.component';
import { BlogPrevComponent } from './blog-prev/blog-prev.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingPageRoutingModule } from './landing-page-routing/landing-page-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    BlogPrevComponent,
    AboutMeComponent,
    ContactComponent,
  ],
  imports: [CommonModule, SharedModule, LandingPageRoutingModule],
  providers: [BlogService],
  exports: [],
})
export class LandingPageModule {}
