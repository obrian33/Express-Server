import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Array<Book> = [];
  book: Book;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBooks().subscribe( (books: Array<Book>) => {
      console.log(this.books);
      this.books = books;
    }, error => {
      console.log(error);
    });
  }

}
