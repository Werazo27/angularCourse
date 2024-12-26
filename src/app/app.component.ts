import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'angularCourse',
    logo: 'data:image/jpeg;base64,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',
  };

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
