import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {Classes} from '../model/classes';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiURL}`;
@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<Classes[]> {
    return this.http.get<Student[]>(`${API_URL}/classes`);
  }

  // getStudentById(id: number): Observable<Student> {
  //   return this.http.get<Student>(`${API_URL}/students/${id}`);
  // }
  //
  // createNewStudent(student: Student): Observable<Student> {
  //   return this.http.post<Student>(`${API_URL}/students`, student);
  // }
  //
  //
  // updateStudentInfo(id: number , student: Student): Observable<Student> {
  //   return this.http.put<Student>(`${API_URL}/students/${id}`, student);
  // }
  //
  // deleteStudent(id: number): Observable<Student> {
  //   return this.http.delete<Student>(`${API_URL}/students/${id}`);
  // }

}
