import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LettersService } from '../../letters.service';

@Component({
  selector: 'app-single-letter',
  templateUrl: './single-letter.component.html',
  styleUrls: ['./single-letter.component.css']
})
export class SingleLetterComponent implements OnInit {
  private _letterId: string;
  public letter;

  constructor (private _route: ActivatedRoute, private _letterService: LettersService) {
    this._route.params.subscribe((params) => this._letterId = params.letterId);
    this._letterService.getLetter(this._letterId).subscribe((letter) => this.letter = letter);
  }

  ngOnInit() {
  }

}
