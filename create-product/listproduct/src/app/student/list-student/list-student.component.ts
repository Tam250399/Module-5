import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  listStudent: Student[] = [];
   student: Student = {
     classes : ''
   };
  studentUpdate: Student = {};
   isShowCreateForm = false;
  isShowUpdateForm: boolean;
  currenIndex = -1;
  listClass: string[] = ['C1120G1' , 'C1120G2' , 'C1120G3'];
  constructor() { }

  ngOnInit() {
  }

  addNewStudent() {
    this.listStudent.push(this.student);
    this.student = {};
  }
    openForm() {
    this.isShowCreateForm = !this.isShowCreateForm;
    }

  remoStudent(i: number) {
    this.listStudent.splice(i, 1);
  }

  showUpdateForm(i: number) {
    this.currenIndex = i;
    this.isShowUpdateForm = !this.isShowUpdateForm;
    this.studentUpdate = {
      id : this.listStudent[i].id,
      name : this.listStudent[i].name,
      address : this.listStudent[i].address,
      mark : this.listStudent[i].mark,
      classes: this.listStudent[i].classes
    };
  }

  UpdateStudent(index) {
    this.listStudent[index] = this.studentUpdate;
    this.studentUpdate = {};

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
