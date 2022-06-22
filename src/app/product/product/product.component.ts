import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setLocal = () => {
    localStorage.setItem('userName', 'abhishek');
    
    let userInfo = {
      firstName: 'abhishek',
      lastName: 'kumar',
      age: 25,
      address: 'New Delhi'
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
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

  setSession = () => {
    sessionStorage.setItem('productName', 'phone');
    sessionStorage.setItem('productPrice', '1000');
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
