import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewAllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
