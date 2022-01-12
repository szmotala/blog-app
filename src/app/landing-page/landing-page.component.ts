import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  section: string;
  rendered: boolean;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      if (this.router.snapshot.queryParams['section']) {
        this.section = JSON.parse(params['section']);
        this.scrollToSection(this.section);
      } else {
        this.section = undefined;
      }
    });
  }

  ngAfterViewChecked() {
    if (this.section != undefined) this.scrollToSection(this.section);
  }

  scrollToSection(section: string) {
    let element = document.querySelector('.' + section);
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}
