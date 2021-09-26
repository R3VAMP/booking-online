import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookshareService } from './services/bookshare.service';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [BookshareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
