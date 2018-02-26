import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {

  constructor() { }

  @Input() letter;

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  public runDelete() {
    this.delete.emit(this.letter);
  }
}
