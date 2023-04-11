import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {of, tap} from 'rxjs';

const USERS_KEY = makeStateKey('users');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private transferState = inject(TransferState);
  private http = inject(HttpClient);

  getUsers() {

    if (this.transferState.hasKey(USERS_KEY)) {
      return of(this.transferState.get(USERS_KEY, null));
    }

    return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
      tap(users => this.transferState.set(USERS_KEY, users))
    )
  }
}
