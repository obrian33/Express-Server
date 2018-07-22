import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails = (id: string) => {
    this.apiService.getBookById(id).subscribe( (book: Book) => {
      console.log(book);
      this.book = book;
    });
  }

}
