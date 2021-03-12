import {Component, EventEmitter, NgZone, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IndexComponent} from '../index/index.component';
import { Teacher } from '../entity/teacher';
import 'zone.js/dist/zone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * 是否显示错误信息
   */
  showError = false;
  test = true;
  teacher = {} as Teacher;
  @Output()
  belogin = new EventEmitter<Teacher>();
  constructor(private httpClient: HttpClient, private ngZone: NgZone) {
  }

  ngOnInit(): void {
    // 每1秒钟向上弹出一个空数据
  }

  onSubmit(): void {
    console.log('点击了登录按钮');
    const authString = encodeURIComponent(this.teacher.username) + ':' + this.teacher.password;
    console.log(authString);
    const authToken = btoa(authString);
    console.log(authToken);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + authToken);
    this.httpClient.get<Teacher>('http://angular.api.codedemo.club:81/teacher/login',
        {headers: httpHeaders})
      .subscribe(teacher => this.belogin.emit(teacher),
        error => {
        console.log('发生错误, 登录失败', error);
        this.showErrorDelay();
      });
  }

  /**
   * 延迟显示错误信息
   */
  showErrorDelay(): void {
    this.showError = true;
    this.test = false;
    console.log(this.showError);
    this.ngZone.run(() => {
      setTimeout(() => {
        console.log('1.5秒后触发');
        this.showError = false;
        console.log(this.showError);
      }, 15000);
    });
  }
}
