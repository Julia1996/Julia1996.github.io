import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user;

  constructor() { }

  @Output() onChooseAccount: EventEmitter<any> = new EventEmitter<any>();

  @Output() onDeleteAccount: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    if (!this.user.avatarUrl) {
      this.user.avatarUrl = 'assets/images/user.png';
    }
  }

  chooseAccount() {
    this.onChooseAccount.emit(this.user);
  }

  deleteAccount() {
    this.onDeleteAccount.emit(this.user._id);
  }
}
