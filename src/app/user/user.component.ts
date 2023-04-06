import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private http = inject(HttpClient);
  private meta = inject(Meta);
  private title = inject(Title);
  private route = inject(ActivatedRoute);

  user: any;

  constructor() { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + id).subscribe({
      next: user => {
        this.user = user;
        this.title.setTitle(user.username);
        this.meta.addTags([
          {
            property: 'description',
            content: 'Username is' + user.username
          },
          {
            property: 'og:description',
            content: 'Username is' + user.username
          }
        ])
      }
    })
  }

}
