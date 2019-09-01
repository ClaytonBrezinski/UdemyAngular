import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleParagraph = false;
  numberOfClicks = [];

  toggleParagraph() {
    this.visibleParagraph = !this.visibleParagraph;
    this.numberOfClicks.push(this.numberOfClicks.length);
  }
}


