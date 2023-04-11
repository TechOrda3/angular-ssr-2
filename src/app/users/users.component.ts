import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AsyncPipe, isPlatformBrowser, NgForOf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {RouterLinkWithHref} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {UserService} from '../user.service';
import {LOCAL_STORAGE} from '../token';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [
    NgForOf,
    RouterLinkWithHref,
    AsyncPipe
  ]
})
export class UsersComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private platformId = inject(PLATFORM_ID);
  private userService = inject(UserService);
  private storage = inject(LOCAL_STORAGE);

  users = this.userService.getUsers();

  constructor() { }

  ngOnInit(): void {
    this.storage?.setItem('some key', 'some value');

    // this.meta.addTag({
    //   property: 'description',
    //   content: 'Это список пользователей'
    // })
    this.title.setTitle('Пользователи')
    this.meta.addTags([
      {
        property: 'description',
        content: 'Это список пользователей'
      },
      {
        property: 'og:description',
        content: 'Это список пользователей'
      }
    ])
  }

}
