import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Teacher } from 'src/app/entity/teacher';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-klass-select',
  templateUrl: './klass-select.component.html',
  styleUrls: ['./klass-select.component.css']
})
export class KlassSelectComponent implements OnInit {

  @Output()
  beChange = new EventEmitter<any>();

  teachers = new Array<Teacher>();
  teacherId = new FormControl();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // 关注teacherId
    this.teacherId.valueChanges
      .subscribe((data) => this.beChange.emit(data));
    // 获取所有教师
    this.httpClient.get<Array<Teacher>>('teacher')
      .subscribe((teachers) => this.teachers = teachers, () => console.log('zhixingshibai1')
      );
  }

  onChange(): void {
    console.log('change called');
    this.beChange.emit(this.teacherId);
  }

}
