import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output()
  beLogout = new EventEmitter<void>();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const url = 'teacher/logout';
    this.httpClient.get(url)
      .subscribe(
        () => this.beLogout.emit(),
        error => console.log('logout error', error)
      );
  }
}
