import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class UserDetailsService {

  private checkValue: number = 10;

  constructor() { }

  getValue = (): number => {
    return this.checkValue;
  }
}
