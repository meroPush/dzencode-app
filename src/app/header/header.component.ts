import {Component, OnInit} from '@angular/core';
import {interval, BehaviorSubject, Observable} from "rxjs";
import {SessionService} from "../service/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date$ = new BehaviorSubject<Date>(new Date());
  session$: Observable<number> = this.sessionService.getSession();

  constructor(
    public sessionService: SessionService
  ) {
    interval(1000).subscribe(() => this.date$.next(new Date()));
  }

  ngOnInit(): void {}
}
