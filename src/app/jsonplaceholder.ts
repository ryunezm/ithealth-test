import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface describing the structure of a response from jsonplaceholder
export interface userData {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class Jsonplaceholder {

  private readonly apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient){}

  /**
   * Get all data from a single user
   * @param id user_id
   * @returns https://jsonplaceholder.typicode.com/users/user_id
   */
  getSingleUserData(id: number): Observable<userData>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<userData>(url)
  }
}
