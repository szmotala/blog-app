import { Injectable } from '@angular/core';
import { Post } from './blog/post';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  postCollection: AngularFirestoreCollection<Post>;
  categories: AngularFirestoreCollection<string>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = this.afs.collection('posts', (ref) =>
      ref.orderBy('published', 'desc')
    );
  }

  getPosts() {
    return this.postCollection.snapshotChanges().pipe(
      map((snaps) => {
        return snaps.map((snap) => {
          const id = snap.payload.doc.id;
          const data = snap.payload.doc.data() as Post;
          return {
            id: id,
            ...data,
          };
        });
      })
    );
  }

  getCategoriesList() {
    return this.afs.doc<Array<string>>('categories/categories').valueChanges();
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }
}
