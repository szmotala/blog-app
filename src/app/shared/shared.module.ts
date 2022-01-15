import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, PostCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, PostCardComponent, CommonModule],
})
export class SharedModule {}
