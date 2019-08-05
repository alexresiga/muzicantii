import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable, of} from "rxjs";
import {Post} from "../model/post";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  database: any;

  constructor(db: AngularFireDatabase) {
    this.database = db;
  }

  getPosts(): Observable<Post[]> {
    return this.database.list('/posts', ref => ref.orderByChild('date')
      .limitToLast(100))
      .valueChanges()
      .pipe(catchError(this.handleError(undefined)));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
