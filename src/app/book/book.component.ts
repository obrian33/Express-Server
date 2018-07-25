import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/book.model';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { BookDataSource } from 'src/app/book-data-source';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.apiService);

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBooks().subscribe((books) => {
      console.log(this.books);
      this.books = books;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
