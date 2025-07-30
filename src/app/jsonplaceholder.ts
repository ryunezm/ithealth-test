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

  getUsersData(): Observable<userData[]> {
    return this.http.get<userData[]>(this.apiURL);
  }
  
  getUserData(id: number): Observable<userData>{
    const params = {
      id: id
    }

    return this.http.get<userData>(this.apiURL, {params})
  }
}
