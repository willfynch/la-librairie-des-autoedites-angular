import { Observable } from "rxjs";
import { Book } from "../types/books.entities";

export abstract class BooksGateway {

    abstract getAllBooks() : Observable<Book[]>;
    abstract getOneBook(title:string): Observable<Book | undefined>;
    
}