import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName: string = '';
  location: string = '';
  userNameVal: string = '';
  locationVal: string = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    //paramters
    this.router.params.subscribe(parameter => {
      this.userName = parameter.name;
      this.location = parameter.location;
    })

    //query string
    this.router.queryParams.subscribe(parameter => {
      this.userNameVal = parameter.name;
      this.locationVal = parameter.location;
    })
  }

}
