import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import ReduceButton from '../src/ReduceButton';

describe('ReduceButton', () => {
  describe('countが0より大きい時', () => {
    const count = 10;
    it('通常のReduceButtonを描画できる', () => {
      const component = renderer.create(<ReduceButton count={count} setCounter={() => {}} />);
      expect(component).toMatchSnapshot();
    });
    it(`ボタン押下でカウントカウントが${count}から${count - 1}になる`, () => {
      const onPressEvent = jest.fn();
      const { getByText } = render(<ReduceButton count={count} setCounter={onPressEvent} />);
      fireEvent.press(getByText('-'));
      expect(onPressEvent).toBeCalled();
      expect(onPressEvent.mock.calls[0][0]).toBe(count - 1);
    });
  });
  describe('countが0の時', () => {
    const count = 0;
    it('グレーアウトされたReducerButtonを描画できる', () => {
      const component = renderer.create(<ReduceButton count={count} setCounter={() => {}} />);
      expect(component).toMatchSnapshot();
    });
    it('ボタンが押下できない', () => {
      const onPressEvent = jest.fn();
      const { getByText } = render(<ReduceButton count={0} setCounter={onPressEvent} />);
      fireEvent.press(getByText('-'));
      expect(onPressEvent).not.toBeCalled();
    });
  });
});
