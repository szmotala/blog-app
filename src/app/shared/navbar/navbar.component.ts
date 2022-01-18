import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('menubtn__container') menuBtn;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.menuBtn.nativeElement);
  }

  menuOpen() {
    this.menuBtn.nativeElement.classList.toggle('open');
  }
}
