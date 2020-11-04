import React, { FC, useCallback } from 'react';
import Button from './components/atoms/Button';

interface Props {
  count: number;
  setCounter: (count: number) => void;
}

const ReduceButton: FC<Props> = ({ count, setCounter }) => {
  const reduceCounter = useCallback(() => {
    setCounter(count - 1);
  }, [count, setCounter]);
  return <Button disabled={count <= 0} label="-" onPress={reduceCounter} />;
};

export default ReduceButton;
