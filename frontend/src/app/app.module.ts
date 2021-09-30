import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookshareService } from './services/bookshare.service';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'rent-book', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: '**', component: BookListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    NavBarComponent,
    AddBookComponent,
    BookDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [BookshareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
