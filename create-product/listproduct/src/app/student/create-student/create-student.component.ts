import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student-service.';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = {
    classes: ''
  };


  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
  }


  addNewStudent(form: NgForm) {
    const newStudent = form.value;
    this.studentService.createNewStudent(newStudent);
    this.student = {};
  }
}
