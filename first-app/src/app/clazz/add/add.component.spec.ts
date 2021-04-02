import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { XAuthTokenInterceptor } from 'src/app/x-auth-token.interceptor';
import { ApiInterceptor } from 'src/app/api.interceptor';
import { KlassSelectComponent } from '../klass-select/klass-select.component';


describe('AddComponent', () => {

  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  const authString = 'zhangsan:codedemo.club';
  const authToken = btoa(authString);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent, KlassSelectComponent ],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers: [
        {provide: HTTP_INTERCEPTORS, multi: true, useClass: XAuthTokenInterceptor},
        {provide: HTTP_INTERCEPTORS, multi: true, useClass: ApiInterceptor},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.autoDetectChanges();
  });

  it('onSubmit', () => {
    // 通过TestBed.inject获取到当前模块可供使用的httpClient
    // 前面我们通过这个方法获取过XAuthToken拦截器，道理是一样的
    // 凡是可以被 自动注入 获取的，可以使用该方法来获取到其实例
    const httpClient = TestBed.inject(HttpClient) as HttpClient;

    // 先使用zhangsan来登录一下系统
    const authString = 'zhangsan:codedemo.club';
    const authToken = btoa(authString);
    const httpHeaders = new HttpHeaders().append('Authorization', 'Basic ' + authToken);
    httpClient.get('teacher/login', {headers: httpHeaders})
      .subscribe(() => {
        // 登录成功后，再新建班级，然后就不报401未认证的异常了
        component.clazz = {
          name: 'test',
          teacherId: 1
        };
        component.onSubmit();
      }, error => {
        console.log('登录发生异常，这极有可能是其它学员编辑了张三的用户名所导致，请尝试使用其它用户名');
      });
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.autoDetectChanges();
  });
});
