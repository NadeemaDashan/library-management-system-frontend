import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../serivces/books.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit {
  private http: any;
  public bookList: any;
  private selectedBook: any = {};

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks() {
    let url = 'http://localhost:8081/book/all';
    this.http.get(url).subscribe((data: any) => {
      this.bookList = data;
    });
  }

  deleteBook() {
    let url: string = 'http://localhost:8081/book/' + this.selectedBook.id;

    this.http.delete(url).subscribe((res: any) => {
      this.loadAllBooks();
      this.selectedBook = null;
    });
  }

  setSelectedBook(book: any) {
    this.selectedBook = book;
  }
}
