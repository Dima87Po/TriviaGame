import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$: any;
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (data: any) => {
        localStorage.setItem('AuthToken', data.user.uid);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login-home']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (data: any) => {
        console.log(data);
        this.createUser(data.user);
        localStorage.setItem('AuthToken', data.user.uid);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/signUp']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('AuthToken');
        this.router.navigate(['/login-home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createUser(user) {
    return this.firestore.collection('users').doc(user.uid).set({
      email: user.email,
      score: 0,
    });
  }
}
