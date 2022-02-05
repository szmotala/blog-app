import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menubtn__container') menuBtn;
  constructor() {}

  ngOnInit(): void {}

  menuOpen() {
    this.menuBtn.nativeElement.classList.toggle('open');
  }
}
