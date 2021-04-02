import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../../entity/teacher';
import {Clazz} from '../../entity/clazz';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  teachers = new Array<Teacher>();

  private url = 'clazz';
  clazz = {
    name: '',
    teacherId: null as unknown as number
  };

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Array<Teacher>>('teacher')
      .subscribe(teachers => console.log(this.teachers = teachers));
  }

  onSubmit(): void {
    const newClazz = {
      name: this.clazz.name,
      teacher: new Teacher({id: this.clazz.teacherId})
    };
    this.httpClient.post(this.url, newClazz)
      .subscribe(clazz => console.log('保存成功', clazz),
        error => console.log('保存失败', error));
  }

  onTeacherChange(teacherId: number): void {
    console.log('接收到了选择数据', this.clazz.teacherId = teacherId);
  }
}

