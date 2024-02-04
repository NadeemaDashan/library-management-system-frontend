import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private http: any;
  private apiUrl="http://localhost:8080/book"
  allBooks:any;

  constructor(private httpClient:HttpClient) {
      this.http=httpClient;
   }

  getBooks(){
    let url="http://localhost:8080/book/get"
    return this.http.get(url);
  }
}
