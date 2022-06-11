import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() productQty: number = 0;
  @Output() productQtyChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment = () => {
    this.productQty += 1;
    this.productQtyChange.emit(this.productQty);
  }

  decrement = () => {
    if(this.productQty > 0) {
      this.productQty -= 1;
    }
    this.productQtyChange.emit(this.productQty);
  }
}
