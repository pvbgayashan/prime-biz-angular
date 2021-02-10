import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {}

  public constructDataWithId(docSnaps: any[]): any[] {
    let docs: any[] = [];
    docSnaps.map(docSnap => {
      let doc: any;
      doc = docSnap.payload.doc.data();
      doc.id = docSnap.payload.doc.id;
      docs.push(doc);
    });
    return docs;
  }

}
