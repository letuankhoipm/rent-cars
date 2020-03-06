import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private firestore: AngularFirestore) { }

  create(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("users")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  get(): Observable<any> {
    return this.firestore.collection<any>("design").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }


}
