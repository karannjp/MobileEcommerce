import { Injectable } from '@angular/core';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
  private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
  deleteUser(id:any) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
}
