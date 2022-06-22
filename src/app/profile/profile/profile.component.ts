import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getLocal = () => {
    console.log('inside product section, local storage');
    console.log('userName: ', localStorage.getItem('userName'));

    let userInfoData = localStorage.getItem('userInfo');
    if(userInfoData != null) {
      console.log('user info: ', JSON.parse(userInfoData));
    }
    else {
      console.log('user info: ', userInfoData);
    }
  }
  
  userNameRemoveLocal = () => {
    localStorage.removeItem('userName');
  }

  clearLocal = () => {
    localStorage.clear();
  }
  
  getSession = () => {
    console.log('product price: ', sessionStorage.getItem('productName'));
    console.log('product price: ', sessionStorage.getItem('productPrice'));
  }

  priceRemoveSession = () => {
    sessionStorage.removeItem('productPrice');
  }

  clearSession = () => {
    sessionStorage.clear();
  }

}
