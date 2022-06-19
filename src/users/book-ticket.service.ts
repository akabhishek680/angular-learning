import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  private bookedSeat: number[] = [];
  constructor() { }

  getBookedSeat = (): number[] => {
    return this.bookedSeat;
  }

  bookSeat = (seatNumber: number):void => {
    this.bookedSeat.push(seatNumber);
  }
}
