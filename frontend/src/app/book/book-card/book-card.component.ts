import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.css'],
})
export class BookCardComponent {
  Book: any = {
    id: 1,
    name: 'One Indian Girl',
    type: 'book',
    price: 540,
  };
}
