import { useState } from 'react';

const useControlledComponent = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = (newValue: T) => setValue(newValue);

  return {
    value,
    onChangeText,
  };
};

export default useControlledComponent;
