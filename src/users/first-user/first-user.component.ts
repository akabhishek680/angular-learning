import { Component, OnInit } from '@angular/core';
import { BookTicketService } from '../book-ticket.service';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.scss']
})
export class FirstUserComponent implements OnInit {

  bookedSeat: number[] = [];

  constructor(private bookTicketService: BookTicketService) { }

  ngOnInit(): void {
  }

  bookSeat = (seatNumber: string): void => {
    this.bookTicketService.bookSeat(Number(seatNumber));
  }

  getBookedSeat = ():void => {
    this.bookedSeat = this.bookTicketService.getBookedSeat();
    console.log(this.bookTicketService.getBookedSeat());
  }

}
