import { Injectable } from '@angular/core';

console.log('* inside user detail service, called when module is loaded');
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class UserDetailsService {

  constructor() { }
}
