import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-project';

  prodQty: number = 0;

  updateQty = (qty: string) => {
    this.prodQty = Number(qty);
  }
}
