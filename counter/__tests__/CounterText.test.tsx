import React from 'react';
import renderer from 'react-test-renderer';
import CounterText from '../src/CounterText';

describe('CounterText', () => {
  it('通常のCounterTextを描画できる', () => {
    const component = renderer.create(<CounterText count={0} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('カウントが10以上のときのテキストが表示されているCounterTextを描画ができる', () => {
    const component = renderer.create(<CounterText count={10} />);
    expect(component).toMatchSnapshot();
  });
});
