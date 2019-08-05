import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire";
import { environment} from "../environments/environment";
import { AngularFireDatabaseModule} from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {ReversePipe} from "./reverse.pipe";
import { LoginComponent } from './login/login.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    LoginComponent,
    PostsListComponent,
    PageNotFoundComponent,
    PostsComponent,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
