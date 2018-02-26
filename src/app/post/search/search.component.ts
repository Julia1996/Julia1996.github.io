import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LettersService } from "../../letters.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private _lettersService: LettersService) { }

  ngOnInit() {
  }

  @Output() inputSearchPhrase: EventEmitter<string> = new EventEmitter<string>();

  public search(event, phrase) {
    event.preventDefault();
    this.inputSearchPhrase.emit(phrase);
  }

  public getQuery() {
    return this._lettersService.query;
  }
}
