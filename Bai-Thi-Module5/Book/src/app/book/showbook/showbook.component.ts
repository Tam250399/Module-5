import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book-service';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

  book: Book = {};
  constructor(private bookService: BookService,
              private activeRoute: ActivatedRoute)
  {
    this.activeRoute.paramMap.subscribe(paramMap=>{
      const id = +paramMap.get("id");
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }

  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(book=>{
      this.book = book;
    })
  }

}
