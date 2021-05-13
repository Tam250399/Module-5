import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './book/createbook/createbook.component';
import { UpdatebookComponent } from './book/updatebook/updatebook.component';
import { DeletebookComponent } from './book/deletebook/deletebook.component';
import { ListbookComponent } from './book/listbook/listbook.component';
import { ShowbookComponent } from './book/showbook/showbook.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    UpdatebookComponent,
    DeletebookComponent,
    ListbookComponent,
    ShowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
