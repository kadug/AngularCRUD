import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Dog } from '../models/dogs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DogService {
  dogsCollection: AngularFirestoreCollection<Dog>;
  dogs: Observable<Dog[]>;
  dogDoc: AngularFirestoreDocument<Dog>;

  constructor(public afs: AngularFirestore){
    this.dogsCollection = this.afs.collection('dogs');
    this.dogs = this.afs.collection('dogs').valueChanges();
    this.dogs = this.dogsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dog;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getDogs(){
    return this.dogs;
  }

  addDog(dog: Dog) {
    this.dogsCollection.add(dog);
  }

  deleteDog(dog: Dog){
    this.dogDoc = this.afs.doc(`dogs/${dog.id}`);
    this.dogDoc.delete();
  }

  updateDog(dog: Dog) {
    this.dogDoc = this.afs.doc(`dogs/${dog.id}`);
    this.dogDoc.update(dog);
  }

}
