import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './student/list-student/list-student.component';
import {CreateStudentComponent} from './student/create-student/create-student.component';
import {UpdateStudentComponent} from './student/update-student/update-student.component';


const routes: Routes = [
  {
    path: 'students',
    component: ListStudentComponent
  },
  {
    path: 'students/create',
    component: CreateStudentComponent
  },
  {
    path: 'students/edit/:id',
    component: UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
