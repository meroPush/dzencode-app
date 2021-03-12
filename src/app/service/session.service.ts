import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(
    private socket: Socket
  ) {}

  getSession(): Observable<number> {
    return this.socket.fromEvent('session_count');
  }
}
