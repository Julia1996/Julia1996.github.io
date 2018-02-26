import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LettersService {
  private _mailboxOutputId = '5a77268b7f0d1fac2ba88484';
  public query: string;

  constructor(private _http: HttpClient) {
  }

  public getLetters() {
    return this._http.get('http://test-api.javascript.ru/v1/julia_dolgun/letters');
  }

  public getLetter(id: string) {
    return this._http.get(`http://test-api.javascript.ru/v1/julia_dolgun/letters/${id}`);
  }

  public addLetter(to: string, subject: string, body: string) {
    return this._http.post('http://test-api.javascript.ru/v1/julia_dolgun/letters', {
      to,
      subject,
      body,
      mailbox: this._mailboxOutputId
    });
  }
}
