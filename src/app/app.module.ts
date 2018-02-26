import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserService } from './user.service';
import { LettersService } from './letters.service';
import { AutorizationService } from './autorization.service';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './post/mail-box/mail-box.component';
import { LetterComponent } from './post/mail-box/letter/letter.component';
import { UserCardComponent } from './post/user-card/user-card.component';
import { AddUserComponent } from './post/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { AuthorizationGuard } from './authorization.guard';
import { SingleLetterComponent } from './post/single-letter/single-letter.component';
import { ComposeComponent } from './post/compose/compose.component';
import { SearchComponent } from './post/search/search.component';

const routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'post',
    canActivate: [AuthorizationGuard],
    canActivateChildren: [AuthorizationGuard],
    component: PostComponent,
    children: [
      {
        path: 'letters/:mailbox',
        component: MailBoxComponent
      },
      {
        path: 'letter/:letterId',
        component: SingleLetterComponent
      },
      {
        path: 'compose',
        component: ComposeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    UserCardComponent,
    AddUserComponent,
    LoginComponent,
    PostComponent,
    SingleLetterComponent,
    ComposeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    LettersService,
    AutorizationService,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
