import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, BookCardComponent, BookListComponent, NavBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
