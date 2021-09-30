import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookshareService } from 'src/app/services/bookshare.service';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  SellRent = 1;
  books: Array<IBook>;

  constructor(
    private route: ActivatedRoute,
    private bookShareService: BookshareService
  ) {
    this.books = [];
  }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.bookShareService.getAllBooks(this.SellRent).subscribe(
      (data) => {
        this.books = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
