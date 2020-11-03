import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import PlusButton from '../src/PlusButton';

describe('PlusButton', () => {
  const count = 10;
  it('通常のPlusButtonを描画できる', () => {
    const component = renderer.create(<PlusButton count={count} setCounter={() => {}} />);
    expect(component).toMatchSnapshot();
  });
  it(`ボタンを押下でカウントが${count}から${count + 1}になる`, () => {
    const onPressEvent = jest.fn();
    const { getByText } = render(<PlusButton count={count} setCounter={onPressEvent} />);
    fireEvent.press(getByText('+'));
    expect(onPressEvent).toBeCalled();
    expect(onPressEvent.mock.calls[0][0]).toBe(count + 1);
  });
});
