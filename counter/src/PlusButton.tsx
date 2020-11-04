import React, { FC, useCallback } from 'react';
import Button from './components/atoms/Button';

interface Props {
  count: number;
  setCounter: (count: number) => void;
}

const PlusButton: FC<Props> = ({ count, setCounter }) => {
  const addCounter = useCallback(() => {
    setCounter(count + 1);
  }, [count, setCounter]);
  return <Button label="+" onPress={addCounter} />;
};

export default PlusButton;
