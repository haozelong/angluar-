import { Page } from './page';

describe('Page', () => {
  it('should create an instance', () => {
    let page = new Page(
      {
        number: 2,
        size: 20,
        numberOfElement: 200,
        content: []
      }
    );
    expect(page).toBeTruthy();
    expect(page.first).toBeFalse();
    expect(page.last).toBeFalse();

    page = new Page({
      number: 0,
      size: 20,
      numberOfElement: 200,
      content: []
    });
    expect(page.first).toBeTrue();
    expect(page.last).toBeFalse();


    //  共41条数据,当前处于第三页,每页20条数据,所以当前为尾页
    page = new Page({
      number: 2,
      size: 20,
      numberOfElement: 41,
      content: []
    });

    expect(page.last).toBeTrue();
    expect(page.first).toBeFalse();
  });
});
