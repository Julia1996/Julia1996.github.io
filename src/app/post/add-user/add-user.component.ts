import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import UserValidators from './user-validators';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  public addUserControl: FormGroup;
  constructor(private _userService: UserService) { }

  @Output() public userAppear: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.addUserControl = new FormGroup({
      firstName: new FormControl('', Validators.minLength(2)),
      lastName: new FormControl('', Validators.minLength(2)),
      sex: new FormControl('', Validators.required),
      birthDate: new FormControl('', UserValidators.date),
      email: new FormControl('', UserValidators.email)
    });
  }

  addUser() {
    if (!this.addUserControl.valid) {
      alert ('Form was filled incorrect');
      return;
    }
    this._userService.addUser(this.addUserControl.value).subscribe(() => this.addUserControl.reset());
    this.userAppear.emit();
  }
}
