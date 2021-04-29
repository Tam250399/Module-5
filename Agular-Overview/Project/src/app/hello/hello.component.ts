
import { Component, OnInit } from '@angular/core';
export interface Student{
  id ?: number;
  name ?: string;
  mark ?: number;
  image ?: string;
}
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
 student: Student = {
  id : 1,
  name: 'Nguyễn Công Tâm',
   mark: 0,
   image: 'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'
};
  constructor() { }
  ngOnInit() {
  }

}
