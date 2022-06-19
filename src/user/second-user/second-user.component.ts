import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-second-user',
  templateUrl: './second-user.component.html',
  styleUrls: ['./second-user.component.scss'],
  providers: [UserService]
})
export class SecondUserComponent implements OnInit {
  
  userName: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveName = (userName: string): void => {
    this.userService.userName = userName;
  }

  showName = ():void => { 
    this.userName = this.userService.userName;
    console.log(this.userName);
  }
}
