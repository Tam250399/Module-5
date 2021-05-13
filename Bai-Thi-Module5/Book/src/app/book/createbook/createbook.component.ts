import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book-service';
import {NgForm} from '@angular/forms';
import {Book} from '../../model/book';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  private book: Book= {};

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  addBook(form: NgForm) {
    let newBook = form.value;
    this.bookService.createBook(newBook).subscribe(() => {
      alert('Tạo thành công');
      this.book = {};
    }, error => {
      alert('Thất bại rồi tiếc quá');
    });
  }
}
