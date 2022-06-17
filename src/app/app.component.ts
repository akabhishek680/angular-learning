import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-project';

  @HostListener('click') onClick() {
    console.log('hello');
    window.alert('hello');
  }
}
