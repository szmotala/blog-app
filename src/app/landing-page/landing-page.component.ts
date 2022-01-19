import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  section: string;

  constructor(private router: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      if (this.router.snapshot.queryParams['section']) {
        this.section = JSON.parse(params['section']);
        this.scrollToSection(this.section);
      } else {
        this.section = undefined;
        this.scrollToTop();
      }
    });
    this.titleService.setTitle('Karo | Home');
  }

  scrollToSection(section: string) {
    let element = document.querySelector('.' + section);
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
