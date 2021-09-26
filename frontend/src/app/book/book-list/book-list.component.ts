import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<any> = [
    {
      id: 1,
      name: 'One Indian Girl',
    },
    {
      id: 2,
      name: 'Two Indian Girl',
    },
    {
      id: 3,
      name: 'Three Indian Girl',
    },
    {
      id: 4,
      name: 'Four Indian Girl',
    },
    {
      id: 5,
      name: 'Five Indian Girl',
    },
    {
      id: 6,
      name: 'Six Indian Girl',
    },
    {
      id: 7,
      name: 'Seven Indian Girl',
    },
    {
      id: 8,
      name: 'Eight Indian Girl',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
