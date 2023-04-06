import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private http = inject(HttpClient);
  user = inject(ActivatedRoute).paramMap.pipe(
    switchMap(paramMap => this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + paramMap.get('id')))
  );

  constructor() { }

  ngOnInit(): void {
  }

}
