import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IBook } from '../book/IBook.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshareService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<IBook[]> {
    return this.http.get('data/books.json').pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const booksArray: Array<IBook> = JSON.parse(jsonData);
        return booksArray;
      })
    );
  }
}
