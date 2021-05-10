import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    SearchStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
