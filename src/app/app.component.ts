import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-project';

  userDetailForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userDetailForm = fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getUserDetails = () => {

    console.log(this.userDetailForm.value);
  }

}
