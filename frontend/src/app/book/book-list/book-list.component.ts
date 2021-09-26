import { Component, OnInit } from '@angular/core';
import { BookshareService } from 'src/app/services/bookshare.service';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook>;

  constructor(private bookShareService: BookshareService) {
    this.books = [];
  }

  ngOnInit(): void {
    this.bookShareService.getAllBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
