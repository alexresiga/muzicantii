import {Component, OnInit} from '@angular/core';
import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
