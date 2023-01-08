import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  constructor(private firestore: AngularFirestore) {}

  getTopUsers(): Observable<IUser[]> {
    return this.firestore
      .collection<IUser>('users', (ref) =>
        ref.orderBy('score', 'desc').limit(10)
        
      )
      .valueChanges();
  }
}
