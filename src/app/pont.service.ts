import { Injectable } from '@angular/core';

import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class PontService {
  constructor() { }
  name: string='';
  private subject = new Subject<any>();
  setName(name: string) {
    this.name = name;
    this.subject.next(name);
}
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  getName(): string{
    return this.name;
  }
} 
