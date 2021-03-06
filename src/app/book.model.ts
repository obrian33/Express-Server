export class Book {
    _id: string;
    isbn: string;
    title: string;
    author: string;
    description: string;
    published_year: string;
    publisher: string;
    updated_date: { type: Date, default: number };

    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}
