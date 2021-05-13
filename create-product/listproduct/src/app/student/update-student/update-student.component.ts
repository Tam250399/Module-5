import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../service/student-service.';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
      student: Student = {};
      studentForm: FormGroup = new FormGroup({
        name: new FormControl(),
        address: new FormControl(),
        mark: new FormControl()
      });
      index = -1;
  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.index = +paramMap.get('id');
      this.getStudentByIndex(this.index);
    })
  }

  get id() {
    return this.studentForm.get('id');
  }

  ngOnInit() {

  }

  getStudentByIndex(index: number) {
    this.studentService.getStudentById(index).subscribe(thisStudent =>{
      this.studentForm = new FormGroup({
        name: new FormControl(thisStudent.name),
        address: new FormControl(thisStudent.address),
        mark: new FormControl(thisStudent.mark)
      })
    })
  }

  updateStudentInfo(index) {
    const newStudent = this.studentForm.value;
    this.studentService.updateStudentInfo(index, newStudent).subscribe(() =>{
      alert("Successfuly updated");
    },error => {
      console.log(error);
      alert("Fail to Update")
      }
    );
  }
}
