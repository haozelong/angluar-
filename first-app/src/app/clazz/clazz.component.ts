import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clazz } from '../entity/clazz';
import { Page } from '../entity/page';
import { Teacher } from '../entity/teacher';

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrls: ['./clazz.component.css']
})
export class ClazzComponent implements OnInit {
  // 默认显示第1页的内容
  page = 0;

  // 每页默认为3条
  size = 3;

  // 初始化一个有0条数据的
  pageDate = new Page<Clazz>({
    content: [],
    number: this.page,
    size: this.size,
    numberOfElement: 0
  });

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.httpClient.get<Page<Clazz>>('/clazz/page')
      .subscribe(pageData => this.pageDate = pageData);
  }


}
