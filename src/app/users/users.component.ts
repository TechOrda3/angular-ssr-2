import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {RouterLinkWithHref} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

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

  private http = inject(HttpClient);
  users = this.http.get<any>('https://jsonplaceholder.typicode.com/users');

  constructor() { }

  ngOnInit(): void {
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
