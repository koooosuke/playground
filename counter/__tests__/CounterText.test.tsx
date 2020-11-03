import React from 'react';
import renderer from 'react-test-renderer';
import CounterText from '../src/CounterText';

describe('CounterText', () => {
  it('通常のCounterTextを描画できる', () => {
    const component = renderer.create(<CounterText count={0} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
