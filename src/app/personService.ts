import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPerson() {
    return this.http.get<Person[]>('assets/person.json').toPromise();
  }
}
