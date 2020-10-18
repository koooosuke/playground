import React, { FC } from 'react';

type Props = {
    name: string,
    age: number 
};

const Person: FC<Props> = ({ name, age, children }) => (
  <div>
    <p>I'm a {name}! I'm {age} years old!</p>
    {children && <p>{children}</p>}
  </div>
);

export default Person;
