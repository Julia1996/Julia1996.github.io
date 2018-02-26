import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AutorizationService } from '../autorization.service';
import { Router } from '@angular/router';

interface User {
  fullName: string;
  email: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public users: User[];

  constructor(
    private _userService: UserService,
    public autorizationService: AutorizationService,
    private _router: Router) {
    this.getUsers();
  }

  public getUsers() {
    const usersObserv = this._userService.getUsers();
    usersObserv.subscribe(data => {
      this.users = data;
    });
  }

  public logOut() {
    this.autorizationService.isAutorized = false;
    this._router.navigate(['']);
  }

  public deleteAccount(userId) {
    this._userService.removeUser(userId).subscribe(() => this.getUsers());
  }

  public searchLetters(phrase) {
    this._router.navigate([`/post/letters/search`], {
      queryParams: { q: phrase }
    });
  }
}
