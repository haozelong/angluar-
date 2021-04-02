import { Clazz } from './clazz';
import {Teacher} from './teacher';

describe('Clazz', () => {
  it('should create an instance', () => {
    expect(new Clazz({name: 'test'})).toBeTruthy();
    expect(new Clazz({teacher: {id: 1} as Teacher})).toBeTruthy();
    expect(new Clazz({id: 1, name: 'test', teacher: {id: 1} as Teacher})).toBeTruthy();
  });
});
