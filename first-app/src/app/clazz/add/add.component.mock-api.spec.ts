import {AddComponent} from './add.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInjector, MockApiInterceptor, MockApiInterface, randomNumber} from '@yunzhi/ng-mock-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RequestMethodType, RequestOptions} from '@yunzhi/ng-mock-api/lib/mock-api.types';
import { ApiInterceptor } from 'src/app/api.interceptor';
import {TeacherMockApi} from '../../mock-api/teacher.mock.api';
import {ClazzMockApi} from '../../mock-api/clazz.mock.api';
import { KlassSelectComponent } from '../klass-select/klass-select.component';

describe('clazz add with mockapi', () => {
  let component : AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent,KlassSelectComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [ {provide: // @ts-ignore
    HTTP_INTERCEPTORS, multi: true, useClass: MockApiInterceptor.forRoot([ClazzMockApi, TeacherMockApi])}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('在MockApi下完成组件测试Submit', () => {
    component.clazz.name = '测试班级名称';
    component.clazz.teacherId = randomNumber();
    component.onSubmit();
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.autoDetectChanges();
  });

  it('getApiUrl()', () => {
    console.log('duanyan');
    expect(ApiInterceptor.getApiUrl('clazz')).toEqual('http://angular.api.codedemo.club/clazz');
    expect(ApiInterceptor.getApiUrl('/clazz')).toEqual('http://angular.api.codedemo.club/clazz');
  });
});




