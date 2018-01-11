import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }
public getContacts(){
  return  [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com'
      },
      {
        firstName: 'Daniel',
        lastName: 'Ros',
        email: 'daniel@example.com'
      },
      {
        firstName: 'Martin',
        lastName: 'Hess',
        email: 'martin@example.com'
      },
      {
        firstName: 'Martin',
        lastName: 'Miiiss',
        email: 'martinmiss@example.com'
      }
    ];
  }
  public getMessage(){
    return 'bravoooo';
  }
}

