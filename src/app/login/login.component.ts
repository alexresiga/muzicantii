import {Component, NgZone, OnInit} from '@angular/core';
import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private ngZone: NgZone,
        public afAuth: AngularFireAuth,
        private router: Router
    ) {
    }

    login() {
        this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
            .then(() => this.ngZone.run(() => this.router.navigate(['/posts'])).then());
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    ngOnInit() {
        if (!!this.afAuth.user) {
            this.ngZone.run(() => this.router.navigate(['/posts'])).then();
        }
    }
}
