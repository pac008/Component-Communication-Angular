import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseReqRes, User } from './interfaces/user';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api';
  // public userSelected!: User;
  public userSelected$ = new Subject<User>();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<ResponseReqRes>(`${this.baseUrl}/users`)
        .pipe(
          map(resp => resp.data)
        );
  }
}
