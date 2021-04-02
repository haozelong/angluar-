import {ApiInjector, MockApiInterface, randomNumber} from "@yunzhi/ng-mock-api";
import {RequestOptions} from "@yunzhi/ng-mock-api/lib/mock-api.types";

/**
 * 教师模拟后台
 */
export class TeacherMockApi implements MockApiInterface {
  getInjectors(): ApiInjector<any>[] {
    console.log('模拟教师后台执行');
    return [
      {
        method: 'GET',
        url: 'teacher',
        result:  (urlMatches: string, options: RequestOptions) => {
          return [
            {
              id: randomNumber(),
              name: '测试教师1',
            },
            {
              id: randomNumber(),
              name: '测试班级2',
            },
            {
              id: randomNumber(),
              name: '测试教师3',
            },
            {
              id: randomNumber(),
              name: '测试班级4',
            },
            {
              id: randomNumber(),
              name: '测试教师5',
            },
            {
              id: randomNumber(),
              name: '测试班级6',
            },
            {
              id: randomNumber(),
              name: '测试教师7',
            },
            {
              id: randomNumber(),
              name: '测试班级8',
            },
            {
              id: randomNumber(),
              name: '测试教师9',
            },
            {
              id: randomNumber(),
              name: '测试班级10',
            },
            {
              id: randomNumber(),
              name: '测试教师11',
            },
            {
              id: randomNumber(),
              name: '测试班级12',
            },
            {
              id: randomNumber(),
              name: '测试教师13',
            },
            {
              id: randomNumber(),
              name: '测试班级14',
            },
            {
              id: randomNumber(),
              name: '测试教师15',
            },
            {
              id: randomNumber(),
              name: '测试班级16',
            },
            {
              id: randomNumber(),
              name: '测试教师17',
            },
            {
              id: randomNumber(),
              name: '测试班级18',
            },
            {
              id: randomNumber(),
              name: '测试教师19',
            },
            {
              id: randomNumber(),
              name: '测试班级20',
            },
            {
              id: randomNumber(),
              name: '测试教师21',
            },
            {
              id: randomNumber(),
              name: '测试班级22',
            },
          ]
        }
      }
    ]
  }
}
