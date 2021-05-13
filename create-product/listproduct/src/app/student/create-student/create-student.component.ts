import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student-service.';
import {NgForm} from '@angular/forms';
import {ClassesService} from '../../service/classes.service';
import {Classes} from '../../model/classes';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = {
    classes: ''
  };

    listClass: Classes [] = [];


  constructor(private studentService: StudentService,
              private classService: ClassesService
  ) {
  }

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass() {
    this.classService.getAllClasses().subscribe(classes => {
      this.listClass = classes;
    });
  }

  addNewStudent(form: NgForm) {
    const newStudent = {
      name: form.value.name,
      address: form.value.address,
      mark: form.value.mark,
      classes: {
        id: form.value.classId,
      }
    };
    this.studentService.createNewStudent(newStudent).subscribe(() => {
      console.log('tạo thành công');
      this.student = {};
    }, error => {
      console.log(error);
      }
    );

  }
}
