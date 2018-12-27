import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjsdoc';
  isCollapsed: boolean = true;
  show: boolean = true;
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleV() {
    this.show = !this.show;
  }
}
