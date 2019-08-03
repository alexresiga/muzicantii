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


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    LoginComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
