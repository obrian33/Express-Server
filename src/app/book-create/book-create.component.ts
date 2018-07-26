import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/book.model';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  book: Book;

  constructor(private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'author': [null, Validators.required],
      'description': [null, Validators.required],
      'published_year': [null, Validators.required],
      'publisher': [null, Validators.required]
    });
  }

  onFormSubmit = (form: NgForm) => {
    console.log(form);
    this.apiService.postBook(form).subscribe((book: Book) => {
      const id = book['_id'];
      this.book = book;
      this.router.navigate(['/book-details', id]);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
