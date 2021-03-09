import {Component, OnInit} from '@angular/core';
import {interval, BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date$ = new BehaviorSubject<Date>(new Date());

  constructor() {
    interval(1000).subscribe(() => this.date$.next(new Date()));
  }

  ngOnInit(): void {}
}
