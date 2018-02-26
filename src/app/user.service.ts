import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private _users;

  constructor(private _http: HttpClient) {
    this._users = this._http.get('http://test-api.javascript.ru/v1/julia_dolgun/users');
  }

  public getUsers() {
    return this._users;
  }

  public addUser(values) {
    return this._http.post('http://test-api.javascript.ru/v1/julia_dolgun/users', {
      fullName: `${values.firstName} ${values.lastName}`,
      email: values.email,
      birthdate: values.birthDate,
      gender: values.sex
    });
  }

  public removeUser(userId) {
    return this._http.delete(`http://test-api.javascript.ru/v1/julia_dolgun/users/${userId}`);
  }
}
