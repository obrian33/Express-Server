import { DataSource } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { Book } from './book.model';
import { Observable } from 'rxjs';

export class BookDataSource extends DataSource<Book> {
    constructor(private apiService: ApiService) {
        super();
    }

    connect(): Observable<Array<Book>> {
        return this.apiService.getBooks();
    }

    disconnect() {

    }
}
