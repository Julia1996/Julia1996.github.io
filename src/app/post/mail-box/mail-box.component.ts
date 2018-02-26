import { Component, OnInit } from '@angular/core';
import { LettersService } from '../../letters.service';
import { ActivatedRoute } from "@angular/router";

const mailBoxesIds = {
  inbox: '5a8f1ca07f0d1fac2ba88a18',
  output: '5a77268b7f0d1fac2ba88484',
  spam: '5a8f1ca07f0d1fac2ba88a19'
};

interface ILetter {
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit{
  public letters: ILetter[] = [];
  public query: string;
  private _mailbox: string;

  constructor(private _lettersService: LettersService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params.mailbox === 'search') {
        this._route.queryParams.subscribe((queryParams) => {
          this.query = queryParams.q;
          this._search();
          this._lettersService.query = queryParams.q;
        }).unsubscribe();
      } else {
        this._mailbox = params.mailbox;
        this._getLetters();
        this._lettersService.query = '';
      }
    });
  }

  private _getLetters() {
    const lettersObserv = this._lettersService.getLetters();
    lettersObserv.subscribe(letters => {
      this.letters = (letters as ILetter[]).filter((letter) => (letter as ILetter).mailbox === mailBoxesIds[this._mailbox]);
    });
  }

  public deleteLetter(mailItem): void {
    this.letters.splice(this.letters.indexOf(mailItem), 1);
  }

  private _search() {
    const lettersObserv = this._lettersService.getLetters();
    lettersObserv.subscribe(letters => {
      this.letters = (letters as ILetter[]).filter((letter) => (letter as ILetter).body.indexOf(this.query) !== -1);
    });
  }
}
