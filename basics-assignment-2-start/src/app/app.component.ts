import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';

  updateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  eraseUsername() {
    if (!this.username || this.username.length === 0) {
      this.username = '';
    }
  }
}
