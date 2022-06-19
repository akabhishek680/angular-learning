import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.scss'],
  providers: [UserService]
})
export class FirstUserComponent implements OnInit {

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
