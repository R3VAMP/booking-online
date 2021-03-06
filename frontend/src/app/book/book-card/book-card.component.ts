import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.css'],
})
export class BookCardComponent {
  @Input() book: IBook;
}
