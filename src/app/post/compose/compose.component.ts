import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LettersService } from '../../letters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  public composeControl: FormGroup;

  constructor(private _lettersService: LettersService, private _router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.composeControl = this._fb.group({
      to: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  send() {
    if (!this.composeControl.valid) {
      alert('Fill all the fields');
      return;
    }
    this._lettersService
      .addLetter(this.composeControl.value.to, this.composeControl.value.subject, this.composeControl.value.body)
      .subscribe()
      .unsubscribe();
    this._router.navigate(['post/letters/inbox']);
  }
}
