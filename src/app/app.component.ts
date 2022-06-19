import { Component } from '@angular/core';
import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserDetailsService]
})
export class AppComponent {
  title = 'angular-learning-project';

  constructor(private userService: UserDetailsService) {

    console.log('value from service: ', this.userService.getValue());
  }

}
