import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student-service.';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  listStudent: Student[] = [];
  currenIndex =  -1;

  //  student: Student = {
  //    classes : ''
  //  };
  // studentUpdate: Student = {};

  // isShowUpdateForm: boolean;

  // listClass: string[] = ['C1120G1' , 'C1120G2' , 'C1120G3'];
  constructor(private studentService: StudentService) {
  }


  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.listStudent = this.studentService.getAllStudent();
  }

  remoStudent(i: number) {
    this.listStudent.splice(i, 1);
  }

  findStudentByName(value) {
    const student = [];
    for (let i = 0; i < this.listStudent.length; i++) {
      if (this.listStudent[i].name.includes(value)) {
        student.push(this.listStudent[i]);
      }
    }
    this.listStudent = student;
  }
}
