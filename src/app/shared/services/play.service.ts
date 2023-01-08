import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, delay, Observable } from 'rxjs';
import { Trivia } from '../../dashboard/modules/play/models';
import { mockTrivias } from './mock';
import { increment } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private firestore: AngularFirestore) {}

  getTrivias(): Observable<Trivia[]> {
    return of(mockTrivias).pipe(
      delay(2000)
    )
  }

  increaseScore() {
    const uiid = localStorage.getItem('AuthToken');
    return this.firestore.collection('users').doc(uiid).update({
      score: increment(1) 
    })
  }
}
